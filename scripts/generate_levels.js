const fs = require('fs');
const path = require('path');
const ZenLights = require('../src/lights.js');

// Deterministic PRNG
function sfc32(a, b, c, d) {
  return function() {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
    var t = (a + b | 0) + d | 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}

const packs = [
  {
    id: 'pack-1',
    name: 'Dawn Awakening',
    subtitle: 'Gentle 3x3 ripples to learn the harmonic balance',
    rows: 3,
    cols: 3,
    levelDefs: [
      { name: 'First Glow', moves: [[1, 1]] },
      { name: 'Twin Beacons', moves: [[0, 1], [2, 1]] },
      { name: 'Diagonal Echo', moves: [[0, 0], [2, 2]] },
      { name: 'Cornerstone', moves: [[0, 0], [0, 2], [2, 0]] },
      { name: 'Four Corners', moves: [[0, 0], [0, 2], [2, 0], [2, 2]] },
      { name: 'Cross Beam', moves: [[0, 1], [1, 0], [1, 2], [2, 1]] },
      { name: 'The Trident', moves: [[0, 1], [1, 1], [2, 1]] },
      { name: 'Whispering Wind', moves: [[0, 0], [1, 1], [2, 0]] },
      { name: 'Radiant Diamond', moves: [[1, 0], [0, 1], [1, 2], [2, 1], [1, 1]] },
      { name: 'Zenith 3x3', moves: [[0, 0], [0, 2], [1, 1], [2, 1]] }
    ]
  },
  {
    id: 'pack-2',
    name: 'Lotus Petals',
    subtitle: 'Balanced 4x4 symmetries and elegant geometry',
    rows: 4,
    cols: 4,
    levelDefs: [
      { name: 'Lotus Bud', moves: [[1, 1], [2, 2]] },
      { name: 'Square Dance', moves: [[1, 1], [1, 2], [2, 1], [2, 2]] },
      { name: 'Outer Ring', moves: [[0, 0], [0, 3], [3, 0], [3, 3]] },
      { name: 'Petal Waves', moves: [[0, 1], [0, 2], [3, 1], [3, 2]] },
      { name: 'Mirror Lake', moves: [[1, 0], [2, 0], [1, 3], [2, 3]] },
      { name: 'The Anchor', moves: [[0, 1], [1, 1], [2, 1], [3, 2]] },
      { name: 'Pinwheel', moves: [[0, 1], [1, 3], [3, 2], [2, 0]] },
      { name: 'Crescent Moon', moves: [[0, 0], [1, 0], [2, 0], [3, 1], [3, 2]] },
      { name: 'Diamond Ring', moves: [[0, 2], [1, 1], [2, 2], [1, 3], [3, 0]] },
      { name: 'Zenith 4x4', moves: [[0, 0], [0, 3], [1, 2], [2, 1], [3, 0], [3, 3]] }
    ]
  },
  {
    id: 'pack-3',
    name: 'Constellations',
    subtitle: 'Classic 5x5 deep logic matrices and starry patterns',
    rows: 5,
    cols: 5,
    levelDefs: [
      { name: 'North Star', moves: [[2, 2], [1, 2], [3, 2]] },
      { name: 'Pleiades', moves: [[1, 1], [1, 3], [3, 1], [3, 3]] },
      { name: 'Orion Belt', moves: [[2, 1], [2, 2], [2, 3]] },
      { name: 'Solar Corona', moves: [[1, 2], [2, 1], [2, 3], [3, 2], [0, 2], [4, 2]] },
      { name: 'Cassiopeia', moves: [[0, 1], [1, 3], [2, 2], [3, 4], [4, 2]] },
      { name: 'Starlight Cross', moves: [[0, 2], [2, 0], [2, 4], [4, 2], [2, 2]] },
      { name: 'Stardust Orbit', moves: [[0, 0], [0, 4], [4, 0], [4, 4], [2, 2]] },
      { name: 'Southern Cross', moves: [[1, 2], [2, 1], [2, 2], [2, 3], [3, 2], [4, 2]] },
      { name: 'Galaxy Spiral', moves: [[0, 2], [1, 1], [2, 0], [3, 1], [4, 2], [3, 3], [2, 4]] },
      { name: 'Zenith 5x5', moves: [[0, 1], [0, 3], [1, 0], [1, 4], [3, 0], [3, 4], [4, 1], [4, 3]] }
    ]
  },
  {
    id: 'pack-4',
    name: 'Eclipse Matrix',
    subtitle: 'Intricate harmonic interference across 5x5 and 6x6',
    rows: 5,
    cols: 5,
    levelDefs: [
      { name: 'Total Eclipse', moves: [[1, 1], [1, 3], [2, 2], [3, 1], [3, 3], [0, 0], [4, 4]] },
      { name: 'Umbra Wave', moves: [[0, 2], [1, 2], [2, 0], [2, 4], [3, 2], [4, 2], [1, 1], [3, 3]] },
      { name: 'Prism Refraction', moves: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [0, 4], [4, 0]] },
      { name: 'Penumbra Veil', moves: [[1, 0], [1, 4], [3, 0], [3, 4], [2, 1], [2, 3], [2, 2]] },
      { name: 'Lunar Tide', moves: [[0, 1], [0, 3], [2, 2], [4, 1], [4, 3], [1, 2], [3, 2], [2, 0]] },
      // 6x6 levels start here
      { name: 'Hexagonal Gate', rows: 6, cols: 6, moves: [[1, 2], [1, 3], [2, 1], [2, 4], [3, 1], [3, 4], [4, 2], [4, 3]] },
      { name: 'Binary Star', rows: 6, cols: 6, moves: [[1, 1], [2, 2], [3, 3], [4, 4], [1, 4], [4, 1]] },
      { name: 'Singularity', rows: 6, cols: 6, moves: [[2, 2], [2, 3], [3, 2], [3, 3], [0, 0], [5, 5]] },
      { name: 'Nebula Rift', rows: 6, cols: 6, moves: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [2, 2]] },
      { name: 'Zenith Eclipse', rows: 6, cols: 6, moves: [[0, 0], [0, 5], [5, 0], [5, 5], [2, 2], [2, 3], [3, 2], [3, 3]] }
    ]
  },
  {
    id: 'pack-5',
    name: 'Infinite Zen',
    subtitle: 'Grand 6x6 meditative master challenges',
    rows: 6,
    cols: 6,
    levelDefs: [
      { name: 'Serenity Ripple', moves: [[1, 1], [1, 4], [4, 1], [4, 4], [2, 2], [3, 3]] },
      { name: 'Bamboo Forest', moves: [[0, 1], [2, 1], [4, 1], [1, 4], [3, 4], [5, 4]] },
      { name: 'Floating Lanterns', moves: [[0, 2], [0, 3], [5, 2], [5, 3], [2, 0], [3, 0], [2, 5], [3, 5]] },
      { name: 'Karesansui Sand', moves: [[1, 2], [2, 3], [3, 2], [4, 3], [0, 0], [5, 5], [0, 5]] },
      { name: 'Torus Loop', moves: [[1, 1], [1, 2], [1, 3], [1, 4], [4, 1], [4, 2], [4, 3], [4, 4]] },
      { name: 'Temple Gate', moves: [[0, 0], [0, 1], [0, 4], [0, 5], [3, 2], [3, 3], [5, 2], [5, 3]] },
      { name: 'Shinto Shrine', moves: [[1, 0], [1, 5], [2, 1], [2, 4], [3, 2], [3, 3], [4, 1], [4, 4]] },
      { name: 'Enso Circle', moves: [[0, 2], [0, 3], [1, 1], [1, 4], [2, 0], [2, 5], [3, 0], [3, 5], [4, 1], [4, 4], [5, 2], [5, 3]] },
      { name: 'Grand Harmonizer', moves: [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [0, 5], [1, 4], [2, 3], [3, 2], [4, 1], [5, 0]] },
      { name: 'Nirvana', moves: [[0, 2], [1, 3], [2, 4], [3, 1], [4, 2], [5, 3], [2, 2], [3, 3], [0, 0], [5, 5]] }
    ]
  }
];

const allLevels = [];
let globalIndex = 1;

for (const pack of packs) {
  const packLevels = [];
  for (let i = 0; i < pack.levelDefs.length; i++) {
    const def = pack.levelDefs[i];
    const r = def.rows || pack.rows;
    const c = def.cols || pack.cols;

    // Apply presses to empty grid to guarantee solvability
    const emptyGrid = ZenLights.createEmptyGrid(r, c);
    const initialGrid = ZenLights.applyPresses(emptyGrid, def.moves);

    // Verify with solver
    const solution = ZenLights.solve(initialGrid);
    if (!solution.solvable) {
      throw new Error(`Level ${def.name} is unsolvable!`);
    }

    // Verify applying solution achieves solved state
    const solved = ZenLights.applyPresses(initialGrid, solution.solution);
    if (!ZenLights.isSolved(solved)) {
      throw new Error(`Level ${def.name} solver verification failed!`);
    }

    const levelObj = {
      id: `level-${globalIndex}`,
      packId: pack.id,
      packName: pack.name,
      indexInPack: i + 1,
      globalIndex: globalIndex,
      name: def.name,
      rows: r,
      cols: c,
      grid: initialGrid,
      optimalMoves: solution.minMoves,
      par: solution.minMoves,
      starThresholds: [
        solution.minMoves,                  // 3 stars (par / optimal)
        solution.minMoves + 2,              // 2 stars
        solution.minMoves + 5               // 1 star
      ]
    };

    packLevels.push(levelObj);
    allLevels.push(levelObj);
    globalIndex++;
  }
  pack.levels = packLevels;
}

console.log(`Generated and solver-verified ${allLevels.length} levels across ${packs.length} packs.`);

// Write out src/levels.js
const outputContent = `/**
 * ZenLights 50 Solver-Verified Level Definitions
 * Auto-generated with exact GF(2) linear solver par thresholds
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenLightsLevels = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const PACKS = ${JSON.stringify(packs, null, 2)};
  const ALL_LEVELS = ${JSON.stringify(allLevels, null, 2)};

  return {
    PACKS,
    ALL_LEVELS,
    getLevelById: function(id) {
      return ALL_LEVELS.find(l => l.id === id);
    },
    getLevelByIndex: function(idx) {
      return ALL_LEVELS[idx - 1] || null;
    }
  };
}));
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'levels.js'), outputContent, 'utf8');
console.log('Saved src/levels.js successfully.');
