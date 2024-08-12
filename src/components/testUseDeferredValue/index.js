import React, { useDeferredValue } from 'react';
import SlowList from './SlowList';

function TestUseDeferredValue() {
  const [val, setVal] = React.useState('hello world!');

  const deferredValue = useDeferredValue(val);

  const handleChange = (e) => {
    console.log('e.target.value ', e.target.value);
    setVal(e.target.value);
  };
  return (
    <>
      <input onChange={handleChange} />
      {/* 优化前 卡顿严重 */}
      <SlowList text={val} />
      {/* 优化后 顺畅 */}
      <SlowList text={deferredValue} />
    </>
  );
}

export default TestUseDeferredValue;
