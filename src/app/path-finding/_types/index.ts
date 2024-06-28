/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */

export type AlgorithmType = 'DIJKSTRA' | 'A_STAR' | 'BFS' | 'DFS';

export type MazeType = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION';

export type TileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isStart: boolean;
  parent: TileType | null;
};

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
