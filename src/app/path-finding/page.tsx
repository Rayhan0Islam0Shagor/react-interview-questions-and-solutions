/* eslint-disable prettier/prettier */
import { PathFindingProvider } from './_context/PathFindingContext';
import SpeedProvider from './_context/SpeedContext';
import TileProvider from './_context/TileContext';

const PathFindingPage = () => {
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div>Page</div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
};

export default PathFindingPage;
