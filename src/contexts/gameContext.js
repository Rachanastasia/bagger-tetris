import React, { createContext, useState, useEffect } from 'react'

export const GameContext = createContext();

function GameContextProvider({ children }) {
  const [playing, setPlaying] = useState(false);

  //starts timer if playing and when playing changes
  useEffect(() => {
    if (playing) {
      handleTimer();
    }
  }, [playing])

  //starts timer in async function
  async function handleTimer() {
    await setTimeout(function () {
      console.log('setting to false')
      setPlaying(false);
    }, 20000)
  }

  const value = { playing, setPlaying }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;
