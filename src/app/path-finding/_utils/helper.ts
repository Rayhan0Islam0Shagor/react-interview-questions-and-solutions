/* eslint-disable prettier/prettier */
import { GridType, TileType } from '../_types';
import { MAX_COLUMNS, MAX_ROWS } from './constants';

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
  const currentRow = [];

  for (let col = 0; col < MAX_COLUMNS; col++) {
    currentRow.push({
      row,
      col,
      isEnd: row === endTile.row && col === endTile.col,
      isStart: row === startTile.row && col === startTile.col,
      isWall: false,
      isPath: false,
      distance: Infinity, //Number.POSITIVE_INFINITY,
      isTraversed: false,
      parent: null
    });
  }

  return currentRow;
};

export const createGrid = (startTile: TileType, endTile: TileType) => {
  const grid: GridType = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, startTile, endTile));
  }

  return grid;
};
