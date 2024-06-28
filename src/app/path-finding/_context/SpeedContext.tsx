/* eslint-disable prettier/prettier */
'use client';
import { createContext, useContext, useState } from 'react';

import { SpeedType } from '../_types';

interface SpeedContextInterface {
  speed: SpeedType;
  setSpeed: (speed: SpeedType) => void;
}

const SpeedContext = createContext<SpeedContextInterface | undefined>(undefined);

const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(0.5);

  return <SpeedContext.Provider value={{ speed, setSpeed }}>{children}</SpeedContext.Provider>;
};

export default SpeedProvider;

export const useSpeedContext = () => {
  const context = useContext(SpeedContext);

  if (!context) {
    throw new Error('useSpeedContext must be used within a SpeedProvider');
  }

  return context;
};
