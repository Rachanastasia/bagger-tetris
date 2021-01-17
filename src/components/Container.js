import React, { Fragment, useEffect, useContext } from 'react';
import '../css/Container.css';
import { GameContext } from '../contexts/gameContext';

function Container() {
  const { board } = useContext(GameContext);
  //rerender when board changes
  useEffect(() => { }, [board]);

  return (
    <div className='container-wrapper'>
      {board}
    </div>
  )
}

export default Container;
