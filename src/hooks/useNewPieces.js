import { useState, useContext } from 'react';
import OneByOne from '../components/Pieces/OneByOne';
import TwoByTwo from '../components/Pieces/TwoByTwo';
import ThreeByOne from '../components/Pieces/ThreeByOne';
import FourByOne from '../components/Pieces/FourByOne';
import { GameContext } from '../contexts/gameContext';
import cuid from 'cuid';


export function useNewPieces() {
  const { bank, setBank, playing } = useContext(GameContext);

  function selectRandomPiece() {
    const num = Math.floor(Math.random() * 4);
    switch (num) {
      case 0: return <OneByOne key={cuid()} />;
      case 1: return <FourByOne key={cuid()} />;
      case 2: return <TwoByTwo key={cuid()} />;
      case 3: return <ThreeByOne key={cuid()} />;
      default: return <OneByOne key={cuid()} />;
    }

  }

  async function getNewPieces() {
    await setInterval(() => {
      const p = selectRandomPiece();
      setBank([...bank, p])
    }, 5000);

    if (!playing) {
      clearInterval();
    }

  }

  getNewPieces();

  return () => setBank([])
}