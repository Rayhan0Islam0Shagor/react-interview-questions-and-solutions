/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { createContext, useContext, useState } from 'react';

import { AlgorithmType, GridType, MazeType } from '../_types';
import { END_TILE_CONFIGURATION } from '../_utils/constants';
import { START_TILE_CONFIGURATION } from '../_utils/constants';
import { createGrid } from '../_utils/helper';

interface PathFindingContextInterface {
  algorithm: AlgorithmType;
  setAlgorithm: (algorithm: AlgorithmType) => void;
  maze: MazeType;
  setMaze: (maze: MazeType) => void;
  grid: GridType;
  setGrid: (grid: GridType) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisible: boolean) => void;
}

const PathFindingContext = createContext<PathFindingContextInterface | undefined>(undefined);

export const PathFindingProvider = ({ children }: { children: React.ReactNode }) => {
  const [algorithm, setAlgorithm] = useState<AlgorithmType>('BFS');
  const [maze, setMaze] = useState<MazeType>('NONE');
  const [grid, setGrid] = useState<GridType>(
    createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  // Your code here

  return (
    <PathFindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized
      }}
    >
      {children}
    </PathFindingContext.Provider>
  );
};

export default PathFindingContext;

export const usePathFindingContext = () => {
  const context = useContext(PathFindingContext);

  if (!context) {
    throw new Error('usePathFindingContext must be used within a PathFindingProvider');
  }

  return context;
};
