import React, { useState } from 'react'

function EggCarton() {
  const [selected, setSelected] = useState(false);
  //This cannot be rotated
  const [rotated, setRotated] = useState(false);

  return (
    <div className='egg-carton-wrapper'>

    </div>
  )
}

export default EggCarton
