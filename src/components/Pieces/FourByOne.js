import React, { useState } from 'react'

function EggCarton() {
  const [selected, setSelected] = useState(false);
  //This cannot be rotated
  const [rotated, setRotated] = useState(false);

  return (
    <div className='four-by-one width-four height-one piece'>
      <h2>HI</h2>
    </div>
  )
}

export default EggCarton
