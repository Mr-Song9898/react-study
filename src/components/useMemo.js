import React, { memo, useMemo } from 'react';

const Child = memo(function Child({ result }) {
  console.log(' is render==>>', result);
  return <div>{result}</div>
});

export default function UseMemo({ b, c, add }) {
  console.log('b,c==>>>UseMemo is render ', b,c);
  const a = useMemo(() => b.b + c.c, [b, c]);

  console.log('a =>>', a);
  return (
    <>
      <div onClick={add}>add 1</div>
      <Child result={a} />
    </>
  );
}