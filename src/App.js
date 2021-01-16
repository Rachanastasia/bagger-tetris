import React, { useState, useContext } from 'react';
import './css/variables.css';
import './css/main.css';
import Header from './components/Header';
import Start from './components/Start';
import Game from './components/Game';
import { GameContext } from './contexts/gameContext';

function App() {
  const { playing } = useContext(GameContext);
  return (
    <main className="App">
      <Header />
      {playing ? <Game /> : <Start />}
    </main>
  );
}

export default App;
