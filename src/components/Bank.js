import React, { useContext, useEffect } from 'react';
import { GameContext } from '../contexts/gameContext';
import { useNewPieces } from '../hooks/useNewPieces';

function Bank() {
  const { bank } = useContext(GameContext);
  //rerender piece when bank changes
  useEffect(() => { }, [bank])
  //call hook that generates new pieces
  useNewPieces();
  return (
    <div className='bank-wrapper'>
      {bank.map(b => b)}
    </div>
  )
}

export default Bank;
