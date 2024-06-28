/* eslint-disable prettier/prettier */
export const MAX_ROWS = 39;
export const MAX_COLUMNS = 49;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: true,
  isTraversed: false,
  parent: null
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLUMNS - 2,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isStart: true,
  isTraversed: false,
  parent: null
};
