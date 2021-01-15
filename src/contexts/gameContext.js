import React, { createContext, useState } from 'react'

export const GameContext = createContext();

function GameContextProvider({ children }) {




  const value = {}
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;
