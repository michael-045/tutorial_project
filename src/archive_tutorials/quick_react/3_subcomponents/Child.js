import React from 'react';

export default function child({step, setCounter}) {
  const inc = () => { setCounter(x => x + step); };
  const dec = () => { setCounter(x => x - step); };

  return(
    <div>
      <button onClick={inc}>+{step}</button>
      <button onClick={dec}>-{step}</button>
    </div>
  )
}