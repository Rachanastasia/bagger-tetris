import Can from '../components/pieces/Can';
import EggCarton from '../components/pieces/EggCarton';

export function useSelectRandomPiece() {
  const num = Math.floor(Math.random()) * 2;

  switch (num) {
    case 0: return <Can />;
    case 1: return <EggCarton />
  }

}