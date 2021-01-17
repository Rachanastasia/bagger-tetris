import React, { createContext, useState, useEffect } from 'react'

export const GameContext = createContext();

function GameContextProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  //holds pieces that are generated every five seconds
  const [bank, setBank] = useState([]);
  //contains pieces placed on the board
  const [board, setBoard] = useState([]);

  //starts timer if playing and when playing changes
  useEffect(() => {
    if (playing) {
      handleTimer();
    }
  }, [playing])

  console.log({ bank })

  //starts timer in async function
  async function handleTimer() {
    await setTimeout(function () {

      setPlaying(false);
    }, 20000)
  }

  const value = { playing, bank, board, setPlaying, setBank, setBoard }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;
