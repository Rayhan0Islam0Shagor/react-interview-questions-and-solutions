/* eslint-disable prettier/prettier */
'use client';
import { createContext, useContext, useState } from 'react';

import { TileType } from '../_types';
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from '../_utils/constants';

interface TileContextInterface {
  startTile: TileType;
  setStartTile: (tile: TileType) => void;
  endTile: TileType;
  setEndTile: (tile: TileType) => void;
}

const TileContext = createContext<TileContextInterface | undefined>(undefined);

const TileProvider = ({ children }: { children: React.ReactNode }) => {
  const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIGURATION);
  const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIGURATION);

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile
      }}
    >
      {children}
    </TileContext.Provider>
  );
};

export default TileProvider;

export const useTileContext = () => {
  const context = useContext(TileContext);
  if (!context) {
    throw new Error('useTileContext must be used within a TileProvider');
  }

  return context;
};
