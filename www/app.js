/**
 * ZenLights Application Controller
 * Handles gameplay loop, UI interaction, state persistence, audio integration, and PWA registration.
 */

(function () {
  'use strict';

  // State
  let currentMode = 'campaign'; // 'campaign' | 'freeplay'
  let currentLevel = null;
  let currentGrid = null;
  let initialGrid = null;
  let moveCount = 0;
  let moveHistory = []; // Stack of { r, c }
  let activeHint = null; // { r, c } or null
  let activePackId = 'pack-1';
  let progress = {}; // { [levelId]: { stars: number, bestMoves: number } }
  let isLevelWon = false;

  const THEMES = ['', 'theme-emerald', 'theme-amber', 'theme-purple'];
  let currentThemeIndex = 0;

  // DOM Elements
  const elGrid = document.getElementById('lights-grid');
  const elLevelTitle = document.getElementById('level-title');
  const elLevelMeta = document.getElementById('level-meta');
  const elModeSubtitle = document.getElementById('game-mode-subtitle');
  const elHudMoves = document.getElementById('hud-moves');
  const elHudPar = document.getElementById('hud-par');
  const elHudLit = document.getElementById('hud-lit');
  const elHudStars = document.getElementById('hud-stars');
  const elToast = document.getElementById('toast');

  // Modals
  const modalLevels = document.getElementById('modal-levels');
  const modalFreeplay = document.getElementById('modal-freeplay');
  const modalVictory = document.getElementById('modal-victory');
  const modalHelp = document.getElementById('modal-help');

  // Load saved progress
  function loadProgress() {
    try {
      const data = localStorage.getItem('zenlights_progress');
      if (data) {
        progress = JSON.parse(data);
      }
    } catch (e) {
      progress = {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem('zenlights_progress', JSON.stringify(progress));
    } catch (e) {}
  }

  function loadTheme() {
    try {
      const savedTheme = localStorage.getItem('zenlights_theme');
      if (savedTheme) {
        currentThemeIndex = THEMES.indexOf(savedTheme);
        if (currentThemeIndex === -1) currentThemeIndex = 0;
      }
      applyTheme();
    } catch (e) {}
  }

  function applyTheme() {
    THEMES.forEach(t => {
      if (t) document.body.classList.remove(t);
    });
    const active = THEMES[currentThemeIndex];
    if (active) document.body.classList.add(active);
    try {
      localStorage.setItem('zenlights_theme', active);
    } catch (e) {}
  }

  function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    applyTheme();
    const names = ['Deep Nebula', 'Emerald Bamboo', 'Solar Amber', 'Amethyst Twilight'];
    showToast(`Theme: ${names[currentThemeIndex]}`);
  }

  // Toast
  let toastTimer = null;
  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    elToast.textContent = msg;
    elToast.classList.add('visible');
    toastTimer = setTimeout(() => {
      elToast.classList.remove('visible');
    }, 2200);
  }

  // Calculate stars earned based on moves
  function calculateStars(moves, par) {
    if (moves <= par) return 3;
    if (moves <= par + 2) return 2;
    return 1;
  }

  function updateHud() {
    elHudMoves.textContent = moveCount;
    const par = currentLevel ? currentLevel.par : Math.max(1, Math.floor(currentGrid.length * 1.5));
    elHudPar.textContent = par;

    const litCount = ZenLights.countLit(currentGrid);
    elHudLit.textContent = litCount;

    const stars = calculateStars(moveCount, par);
    const starEls = elHudStars.querySelectorAll('.star');
    starEls.forEach((s, idx) => {
      if (idx < stars) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  }

  // Render Grid
  function renderGrid() {
    elGrid.innerHTML = '';
    const rows = currentGrid.length;
    const cols = currentGrid[0].length;

    elGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    elGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isLit = currentGrid[r][c] === 1;
        const cell = document.createElement('button');
        cell.className = 'light-cell' + (isLit ? ' is-lit' : '');
        cell.setAttribute('role', 'gridcell');
        cell.setAttribute('aria-label', `Row ${r + 1}, Column ${c + 1}: ${isLit ? 'Lit' : 'Off'}`);
        cell.dataset.r = r;
        cell.dataset.c = c;

        if (activeHint && activeHint.r === r && activeHint.c === c) {
          cell.classList.add('is-hint');
        }

        const orb = document.createElement('div');
        orb.className = 'light-orb';
        cell.appendChild(orb);

        cell.addEventListener('click', (e) => onCellTap(r, c, e));
        elGrid.appendChild(cell);
      }
    }
  }

  function onCellTap(r, c, event) {
    if (isLevelWon) return;

    // Trigger ripple visual effect
    const cellEl = elGrid.querySelector(`[data-r="${r}"][data-c="${c}"]`);
    if (cellEl) {
      const ripple = document.createElement('div');
      ripple.className = 'ripple-wave';
      cellEl.appendChild(ripple);
      setTimeout(() => ripple.remove(), 450);
    }

    // Play procedural crystal chime
    ZenLightsAudio.playToggle(r, c, currentGrid.length, currentGrid[0].length);

    // Toggle cells
    currentGrid = ZenLights.toggleCell(currentGrid, r, c);
    moveCount++;
    moveHistory.push({ r, c });

    // Clear active hint
    activeHint = null;

    renderGrid();
    updateHud();

    // Check win condition
    if (ZenLights.isSolved(currentGrid)) {
      handleWin();
    }
  }

  function handleWin() {
    isLevelWon = true;
    ZenLightsAudio.playWin();

    const par = currentLevel ? currentLevel.par : Math.max(1, Math.floor(currentGrid.length * 1.5));
    const stars = calculateStars(moveCount, par);

    // Save progress if in campaign
    if (currentMode === 'campaign' && currentLevel) {
      const prev = progress[currentLevel.id] || { stars: 0, bestMoves: Infinity };
      progress[currentLevel.id] = {
        completed: true,
        stars: Math.max(prev.stars, stars),
        bestMoves: Math.min(prev.bestMoves, moveCount)
      };
      saveProgress();
    }

    // Show Victory modal
    const vicStarsEl = document.getElementById('victory-stars');
    vicStarsEl.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const s = document.createElement('span');
      s.className = 'victory-star' + (i < stars ? ' active' : '');
      s.textContent = '★';
      vicStarsEl.appendChild(s);
    }

    document.getElementById('vic-moves').textContent = moveCount;
    document.getElementById('vic-par').textContent = par;

    // Show or hide Next Level button if freeplay or last level
    const btnNext = document.getElementById('btn-vic-next');
    if (currentMode === 'freeplay') {
      btnNext.textContent = 'New Puzzle';
    } else {
      const nextIdx = currentLevel.globalIndex + 1;
      if (nextIdx > ZenLightsLevels.ALL_LEVELS.length) {
        btnNext.textContent = 'Free Play';
      } else {
        btnNext.textContent = 'Next Level';
      }
    }

    modalVictory.classList.add('active');
  }

  // Load a Campaign Level
  function loadLevel(level) {
    currentMode = 'campaign';
    currentLevel = level;
    initialGrid = ZenLights.cloneGrid(level.grid);
    currentGrid = ZenLights.cloneGrid(level.grid);
    moveCount = 0;
    moveHistory = [];
    activeHint = null;
    isLevelWon = false;

    elModeSubtitle.textContent = 'Campaign';
    elLevelTitle.textContent = `${level.globalIndex}. ${level.name}`;
    elLevelMeta.textContent = `${level.packName} • ${level.rows}x${level.cols} Grid`;

    renderGrid();
    updateHud();
    closeAllModals();
  }

  // Load a Custom Free Play Puzzle
  function loadFreePlay(grid, par, sizeName) {
    currentMode = 'freeplay';
    currentLevel = {
      id: 'freeplay-' + Date.now(),
      name: `Zen Flow (${sizeName})`,
      par: par,
      optimalMoves: par,
      rows: grid.length,
      cols: grid[0].length
    };
    initialGrid = ZenLights.cloneGrid(grid);
    currentGrid = ZenLights.cloneGrid(grid);
    moveCount = 0;
    moveHistory = [];
    activeHint = null;
    isLevelWon = false;

    elModeSubtitle.textContent = 'Free Play';
    elLevelTitle.textContent = currentLevel.name;
    elLevelMeta.textContent = `Infinite Zen • ${grid.length}x${grid[0].length} Grid`;

    renderGrid();
    updateHud();
    closeAllModals();
  }

  // Undo Move
  function undoMove() {
    if (moveHistory.length === 0 || isLevelWon) return;
    const last = moveHistory.pop();
    currentGrid = ZenLights.toggleCell(currentGrid, last.r, last.c);
    moveCount--;
    activeHint = null;
    ZenLightsAudio.playUndo();
    renderGrid();
    updateHud();
  }

  // Reset Level
  function resetLevel() {
    if (!initialGrid) return;
    currentGrid = ZenLights.cloneGrid(initialGrid);
    moveCount = 0;
    moveHistory = [];
    activeHint = null;
    isLevelWon = false;
    ZenLightsAudio.playReset();
    renderGrid();
    updateHud();
    showToast('Board reset');
  }

  // Hint Solver
  function requestHint() {
    if (isLevelWon) return;
    const solution = ZenLights.solve(currentGrid);
    if (!solution.solvable || solution.solution.length === 0) {
      showToast('Board already clear!');
      return;
    }

    const nextMove = solution.solution[0];
    activeHint = { r: nextMove[0], c: nextMove[1] };
    ZenLightsAudio.playHint();
    renderGrid();
    showToast(`Optimal move highlighted (Row ${nextMove[0] + 1}, Col ${nextMove[1] + 1})`);
  }

  // Sound Toggle UI
  function updateSoundIcon() {
    const isMuted = ZenLightsAudio.isMuted();
    document.getElementById('icon-sound-on').style.display = isMuted ? 'none' : 'block';
    document.getElementById('icon-sound-off').style.display = isMuted ? 'block' : 'none';
  }

  function toggleSound() {
    const isMuted = !ZenLightsAudio.isMuted();
    ZenLightsAudio.setMuted(isMuted);
    updateSoundIcon();
    showToast(isMuted ? 'Sound Muted' : 'Sound On');
  }

  // Modals management
  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }

  function openLevelsModal() {
    renderPackTabs();
    renderLevelGrid();
    modalLevels.classList.add('active');
  }

  function renderPackTabs() {
    const container = document.getElementById('pack-tabs-container');
    container.innerHTML = '';
    ZenLightsLevels.PACKS.forEach(p => {
      const tab = document.createElement('button');
      tab.className = 'pack-tab' + (p.id === activePackId ? ' active' : '');
      tab.textContent = p.name;
      tab.addEventListener('click', () => {
        activePackId = p.id;
        renderPackTabs();
        renderLevelGrid();
      });
      container.appendChild(tab);
    });
  }

  function renderLevelGrid() {
    const gridEl = document.getElementById('level-select-grid');
    gridEl.innerHTML = '';
    const pack = ZenLightsLevels.PACKS.find(p => p.id === activePackId);
    if (!pack) return;

    pack.levels.forEach(lvl => {
      const tile = document.createElement('button');
      tile.className = 'level-tile';
      if (currentLevel && currentLevel.id === lvl.id) {
        tile.classList.add('current');
      }

      const pData = progress[lvl.id];
      if (pData && pData.stars > 0) {
        tile.classList.add('has-stars');
      }

      const num = document.createElement('span');
      num.className = 'level-tile-num';
      num.textContent = lvl.indexInPack;
      tile.appendChild(num);

      const stars = document.createElement('span');
      stars.className = 'level-tile-stars';
      const count = pData ? pData.stars : 0;
      stars.textContent = count > 0 ? '★'.repeat(count) : `Par ${lvl.par}`;
      tile.appendChild(stars);

      tile.addEventListener('click', () => {
        loadLevel(lvl);
      });

      gridEl.appendChild(tile);
    });
  }

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const key = e.key.toLowerCase();
    if (key === 'z') {
      undoMove();
    } else if (key === 'r') {
      resetLevel();
    } else if (key === 'h') {
      requestHint();
    } else if (key === 'm') {
      toggleSound();
    } else if (key === 'escape') {
      closeAllModals();
    }
  });

  // Event Listeners
  document.getElementById('btn-undo').addEventListener('click', undoMove);
  document.getElementById('btn-reset').addEventListener('click', resetLevel);
  document.getElementById('btn-hint').addEventListener('click', requestHint);
  document.getElementById('btn-theme').addEventListener('click', cycleTheme);
  document.getElementById('btn-sound').addEventListener('click', toggleSound);

  document.getElementById('btn-levels-modal').addEventListener('click', openLevelsModal);
  document.getElementById('btn-freeplay-modal').addEventListener('click', () => {
    modalFreeplay.classList.add('active');
  });
  document.getElementById('btn-help').addEventListener('click', () => {
    modalHelp.classList.add('active');
  });

  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Modal background click to close
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Free play options selection
  let selectedSize = 3;
  let selectedDiff = 'medium';

  document.querySelectorAll('#grid-size-selector .btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#grid-size-selector .btn-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = parseInt(btn.dataset.size, 10);
    });
  });

  document.querySelectorAll('#difficulty-selector .btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#difficulty-selector .btn-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedDiff = btn.dataset.diff;
    });
  });

  document.getElementById('btn-generate-puzzle').addEventListener('click', () => {
    let presses = 3;
    if (selectedDiff === 'light') presses = Math.max(2, selectedSize);
    else if (selectedDiff === 'medium') presses = selectedSize + 2;
    else if (selectedDiff === 'master') presses = selectedSize * 2;

    const puzzle = ZenLights.generatePuzzle(selectedSize, selectedSize, presses);
    loadFreePlay(puzzle.grid, puzzle.minMoves, `${selectedSize}x${selectedSize}`);
  });

  // Victory Buttons
  document.getElementById('btn-vic-replay').addEventListener('click', () => {
    closeAllModals();
    resetLevel();
  });

  document.getElementById('btn-vic-next').addEventListener('click', () => {
    closeAllModals();
    if (currentMode === 'freeplay') {
      document.getElementById('btn-generate-puzzle').click();
    } else {
      const nextIdx = currentLevel.globalIndex + 1;
      const nextLevel = ZenLightsLevels.getLevelByIndex(nextIdx);
      if (nextLevel) {
        loadLevel(nextLevel);
      } else {
        openLevelsModal();
      }
    }
  });

  // Initialize App
  function init() {
    loadProgress();
    loadTheme();
    updateSoundIcon();

    // Start with level 1 or resume highest unlocked
    const firstLevel = ZenLightsLevels.getLevelByIndex(1);
    if (firstLevel) {
      loadLevel(firstLevel);
    }

    // Register Service Worker for offline PWA
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
          console.log('ZenLights ServiceWorker registered:', reg.scope);
        }).catch((err) => {
          console.log('ServiceWorker registration error:', err);
        });
      });
    }
  }

  init();
})();
