import React from 'react';

export default function Ref() {
  const ref1 = React.useRef(0);
  const ref2 = React.useRef(0);

  const handleClick = () => {
    console.log('ref1.current==>>', typeof ref1.current, ref1.current);
    console.log('ref2.current==>>', typeof ref2.current, ref2.current);
    console.log('ref1.current === ref2.current==>>', ref1.current === ref2.current);
    console.log('ref1.current === 0==>>', ref1.current === 0);
    console.log('ref2.current === 0==>>', ref2.current === 0);
  };

  return (
    <>
      <h2>useRef</h2>
      <button onClick={() => { ref1.current++; console.log('ref1.current++ ', ref1.current); }}>ref1 +</button>
      <button onClick={() => { ref1.current--; console.log('ref1.current-- ', ref1.current); }}>ref1 -</button>
      <hr />
      <button onClick={() => { ref2.current++; console.log('ref2.current++ ', ref2.current); }}>ref2 +</button>
      <button onClick={() => { ref2.current--; console.log('ref2.current-- ', ref2.current);}}>ref2 -</button>
      <hr />
      <button onClick={handleClick}>相等</button>
    </>
  );
}