import React, { useContext } from 'react';
import GameContextProvider, { GameContext } from '../contexts/gameContext';

function Start() {
  const { setPlaying } = useContext(GameContext);
  return (
    <section>
      <button onClick={() => setPlaying(true)}>Play!</button>
    </section>
  )
}

export default Start;
