import React, { useState } from 'react';

function TestCompStrictMode({ list }) {
  const [_, reRender] = useState();
  const items = list;
  items.push('+1');

  console.log('items ', items);
  return (
    <>
      {
        items.map((item, i) => <span key={i}>{item}</span>)
      }
      <button onClick={() => { reRender({}); }}>reRender</button>
    </>
  );
}

export default TestCompStrictMode;
