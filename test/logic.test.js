const test = require('node:test');
const assert = require('node:assert/strict');
const ZenLights = require('../src/lights.js');

test('createEmptyGrid initializes rows and cols with zeros', () => {
  const grid = ZenLights.createEmptyGrid(3, 3);
  assert.equal(grid.length, 3);
  assert.equal(grid[0].length, 3);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      assert.equal(grid[r][c], 0);
    }
  }
  assert.equal(ZenLights.isSolved(grid), true);
  assert.equal(ZenLights.countLit(grid), 0);
});

test('toggleCell toggles center and 4 orthogonal neighbors', () => {
  const grid = ZenLights.createEmptyGrid(3, 3);
  const next = ZenLights.toggleCell(grid, 1, 1);
  // Center (1,1) and neighbors (0,1), (2,1), (1,0), (1,2) should be 1
  assert.equal(next[1][1], 1);
  assert.equal(next[0][1], 1);
  assert.equal(next[2][1], 1);
  assert.equal(next[1][0], 1);
  assert.equal(next[1][2], 1);
  // Corners should remain 0
  assert.equal(next[0][0], 0);
  assert.equal(next[0][2], 0);
  assert.equal(next[2][0], 0);
  assert.equal(next[2][2], 0);
  assert.equal(ZenLights.countLit(next), 5);
});

test('toggleCell handles corners properly', () => {
  const grid = ZenLights.createEmptyGrid(3, 3);
  const next = ZenLights.toggleCell(grid, 0, 0);
  // (0,0), (0,1), (1,0) should be 1
  assert.equal(next[0][0], 1);
  assert.equal(next[0][1], 1);
  assert.equal(next[1][0], 1);
  assert.equal(ZenLights.countLit(next), 3);
});

test('double toggle restores initial state', () => {
  const grid = ZenLights.createEmptyGrid(4, 4);
  const t1 = ZenLights.toggleCell(grid, 2, 2);
  const t2 = ZenLights.toggleCell(t1, 2, 2);
  assert.equal(ZenLights.isSolved(t2), true);
});

test('solver solves 3x3 single toggle puzzle', () => {
  let grid = ZenLights.createEmptyGrid(3, 3);
  grid = ZenLights.toggleCell(grid, 1, 1);
  const result = ZenLights.solve(grid);
  assert.equal(result.solvable, true);
  assert.equal(result.minMoves, 1);
  assert.deepEqual(result.solution, [[1, 1]]);

  // Applying solution solves it
  const solvedGrid = ZenLights.applyPresses(grid, result.solution);
  assert.equal(ZenLights.isSolved(solvedGrid), true);
});

test('solver solves complex 4x4 multi-step puzzle', () => {
  let grid = ZenLights.createEmptyGrid(4, 4);
  const moves = [[0, 0], [1, 2], [3, 1]];
  grid = ZenLights.applyPresses(grid, moves);

  const result = ZenLights.solve(grid);
  assert.equal(result.solvable, true);
  assert.ok(result.minMoves <= 3);

  const finalGrid = ZenLights.applyPresses(grid, result.solution);
  assert.equal(ZenLights.isSolved(finalGrid), true);
});

test('solver solves classic 5x5 puzzle with free variables', () => {
  let grid = ZenLights.createEmptyGrid(5, 5);
  // Classic 5x5 pattern: all 4 corners toggled
  grid = ZenLights.toggleCell(grid, 0, 0);
  grid = ZenLights.toggleCell(grid, 0, 4);
  grid = ZenLights.toggleCell(grid, 4, 0);
  grid = ZenLights.toggleCell(grid, 4, 4);

  const result = ZenLights.solve(grid);
  assert.equal(result.solvable, true);
  assert.ok(result.minMoves > 0);

  const finalGrid = ZenLights.applyPresses(grid, result.solution);
  assert.equal(ZenLights.isSolved(finalGrid), true);
});

test('solver solves 6x6 puzzle', () => {
  let grid = ZenLights.createEmptyGrid(6, 6);
  const moves = [[1, 1], [2, 3], [4, 4], [0, 5]];
  grid = ZenLights.applyPresses(grid, moves);

  const result = ZenLights.solve(grid);
  assert.equal(result.solvable, true);

  const finalGrid = ZenLights.applyPresses(grid, result.solution);
  assert.equal(ZenLights.isSolved(finalGrid), true);
});

test('all 50 levels are solver-verified and solvable with optimal moves', () => {
  const Levels = require('../src/levels.js');
  assert.equal(Levels.ALL_LEVELS.length, 50);
  assert.equal(Levels.PACKS.length, 5);

  for (const level of Levels.ALL_LEVELS) {
    assert.ok(level.rows >= 3 && level.rows <= 6);
    assert.ok(level.cols >= 3 && level.cols <= 6);
    assert.equal(level.grid.length, level.rows);
    assert.equal(level.grid[0].length, level.cols);

    const solution = ZenLights.solve(level.grid);
    assert.equal(solution.solvable, true, `Level ${level.name} should be solvable`);
    assert.equal(solution.minMoves, level.optimalMoves, `Level ${level.name} optimal moves should match solver`);

    const solvedGrid = ZenLights.applyPresses(level.grid, solution.solution);
    assert.equal(ZenLights.isSolved(solvedGrid), true, `Level ${level.name} should be solved by its solution`);
  }
});

