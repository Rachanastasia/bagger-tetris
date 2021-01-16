import React, { createContext, useState } from 'react'

export const GameContext = createContext();

function GameContextProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  //set up timer here
  //after timer is up set playing to false

  //when game is started 



  const value = { playing, setPlaying }
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;
