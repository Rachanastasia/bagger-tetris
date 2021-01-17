import React, { useState } from 'react';

function Can() {
  const [selected, setSelected] = useState(false);
  //This cannot be rotated
  const [rotated, setRotated] = useState(false);

  return (
    <div className='one-by-one width-one height-one piece'>
      <h2>HI</h2>
    </div>
  )
}

export default Can
