/**
 * ZenLights Core Logic Engine
 * Solvable grid illumination / Lights Out puzzle engine with GF(2) Gaussian Elimination solver
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ZenLights = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  /**
   * Create an empty grid of size rows x cols (all lights off = 0)
   */
  function createEmptyGrid(rows, cols) {
    const grid = [];
    for (let r = 0; r < rows; r++) {
      grid.push(new Array(cols).fill(0));
    }
    return grid;
  }

  /**
   * Clone a 2D grid
   */
  function cloneGrid(grid) {
    return grid.map(row => row.slice());
  }

  /**
   * Toggle a cell and its 4 orthogonal neighbors (mod 2)
   */
  function toggleCell(grid, r, c) {
    const rows = grid.length;
    const cols = grid[0].length;
    const next = cloneGrid(grid);

    const deltas = [
      [0, 0],   // self
      [-1, 0],  // up
      [1, 0],   // down
      [0, -1],  // left
      [0, 1]    // right
    ];

    for (let i = 0; i < deltas.length; i++) {
      const nr = r + deltas[i][0];
      const nc = c + deltas[i][1];
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        next[nr][nc] ^= 1;
      }
    }
    return next;
  }

  /**
   * Check if all lights are turned off
   */
  function isSolved(grid) {
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c] !== 0) return false;
      }
    }
    return true;
  }

  /**
   * Count currently lit lights
   */
  function countLit(grid) {
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (grid[r][c]) count++;
      }
    }
    return count;
  }

  /**
   * Solve a Lights Out puzzle using Gaussian Elimination over GF(2)
   * Returns:
   *   { solvable: boolean, solution: Array<[r, c]>, minMoves: number, movesGrid: Array<Array<number>> }
   */
  function solve(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const N = rows * cols;

    // Augmented matrix: N rows, N + 1 columns
    const A = [];
    for (let i = 0; i < N; i++) {
      A.push(new Uint8Array(N + 1));
    }

    // Populate toggle adjacency matrix
    for (let r1 = 0; r1 < rows; r1++) {
      for (let c1 = 0; c1 < cols; c1++) {
        const i = r1 * cols + c1;
        // Setting target b[i] = current light state (1 if lit, 0 if off)
        A[i][N] = grid[r1][c1] ? 1 : 0;

        // Effect of pressing (r2, c2) on (r1, c1)
        for (let r2 = 0; r2 < rows; r2++) {
          for (let c2 = 0; c2 < cols; c2++) {
            const j = r2 * cols + c2;
            const isSelf = (r1 === r2 && c1 === c2);
            const isNeighbor = (Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1);
            if (isSelf || isNeighbor) {
              A[i][j] = 1;
            }
          }
        }
      }
    }

    // Gauss-Jordan elimination over GF(2)
    const pivotRowForCol = new Array(N).fill(-1);
    let lead = 0;

    for (let c = 0; c < N && lead < N; c++) {
      // Find pivot row
      let pivot = -1;
      for (let r = lead; r < N; r++) {
        if (A[r][c] === 1) {
          pivot = r;
          break;
        }
      }

      if (pivot === -1) {
        // Free variable
        continue;
      }

      // Swap rows
      if (pivot !== lead) {
        const tmp = A[lead];
        A[lead] = A[pivot];
        A[pivot] = tmp;
      }

      pivotRowForCol[c] = lead;

      // Eliminate all other rows
      for (let r = 0; r < N; r++) {
        if (r !== lead && A[r][c] === 1) {
          for (let k = c; k <= N; k++) {
            A[r][k] ^= A[lead][k];
          }
        }
      }

      lead++;
    }

    // Check for inconsistency (0 = 1 in any row)
    for (let r = lead; r < N; r++) {
      if (A[r][N] === 1) {
        return { solvable: false, solution: [], minMoves: -1, movesGrid: null };
      }
    }

    // Identify free variables
    const freeCols = [];
    for (let c = 0; c < N; c++) {
      if (pivotRowForCol[c] === -1) {
        freeCols.push(c);
      }
    }

    // If there are free variables, try all 2^k assignments to find the one with minimal move count
    const numCombos = 1 << freeCols.length;
    let bestMoves = Infinity;
    let bestX = null;

    for (let combo = 0; combo < numCombos; combo++) {
      const x = new Uint8Array(N);

      // Assign free variables according to combo bitmask
      for (let f = 0; f < freeCols.length; f++) {
        x[freeCols[f]] = (combo >> f) & 1;
      }

      // Back-substitute pivot variables
      let moves = 0;
      for (let c = 0; c < N; c++) {
        const r = pivotRowForCol[c];
        if (r !== -1) {
          let sum = A[r][N];
          for (let f = 0; f < freeCols.length; f++) {
            const fc = freeCols[f];
            if (A[r][fc]) {
              sum ^= x[fc];
            }
          }
          x[c] = sum;
        }
        if (x[c] === 1) moves++;
      }

      if (moves < bestMoves) {
        bestMoves = moves;
        bestX = x;
      }
    }

    const solution = [];
    const movesGrid = createEmptyGrid(rows, cols);

    if (bestX) {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          if (bestX[idx] === 1) {
            solution.push([r, c]);
            movesGrid[r][c] = 1;
          }
        }
      }
    }

    return {
      solvable: true,
      solution: solution,
      minMoves: bestMoves,
      movesGrid: movesGrid
    };
  }

  /**
   * Apply an array of presses to a grid
   */
  function applyPresses(grid, presses) {
    let current = cloneGrid(grid);
    for (let i = 0; i < presses.length; i++) {
      const [r, c] = presses[i];
      current = toggleCell(current, r, c);
    }
    return current;
  }

  /**
   * Generate a random solvable puzzle by applying random presses to an all-off grid
   */
  function generatePuzzle(rows, cols, targetPresses, rng) {
    const random = rng || Math.random;
    let attempts = 0;
    while (attempts < 500) {
      attempts++;
      const base = createEmptyGrid(rows, cols);
      const pressed = new Set();
      const moves = [];

      while (moves.length < targetPresses) {
        const r = Math.floor(random() * rows);
        const c = Math.floor(random() * cols);
        const key = `${r},${c}`;
        if (!pressed.has(key)) {
          pressed.add(key);
          moves.push([r, c]);
        }
      }

      const grid = applyPresses(base, moves);
      if (!isSolved(grid)) {
        const solution = solve(grid);
        if (solution.solvable && solution.minMoves >= Math.min(targetPresses - 2, 3)) {
          return {
            grid: grid,
            solution: solution.solution,
            minMoves: solution.minMoves
          };
        }
      }
    }

    // Fallback: simple cross
    let grid = createEmptyGrid(rows, cols);
    const midR = Math.floor(rows / 2);
    const midC = Math.floor(cols / 2);
    grid = toggleCell(grid, midR, midC);
    return {
      grid: grid,
      solution: [[midR, midC]],
      minMoves: 1
    };
  }

  return {
    createEmptyGrid,
    cloneGrid,
    toggleCell,
    isSolved,
    countLit,
    solve,
    applyPresses,
    generatePuzzle
  };
}));
