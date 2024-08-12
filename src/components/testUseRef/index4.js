import React, { forwardRef, useEffect } from 'react';

const Child = forwardRef(function Child(props, ref) {
  const handleInput = (e) => {
    console.log('value ', e.target.value);
  }
  return <input ref={ref} onChange={handleInput} />
});

function TestUseRef() {
  const [startTime, setStartTime] = React.useState(null);
  const [now, setNow] = React.useState(null);

  const intervalRef = React.useRef(null);

  const childRef = React.useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current && clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 20)
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;

  if (startTime && now) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    console.log('childRef==>> ', childRef.current);
  }, []);

  return (
    <>
      开始了：{secondsPassed}
      <br />
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>暂停</button>

      <Child ref={childRef} />
      <button onClick={() => childRef.current.focus()}>聚焦</button>
    </>
  );
}

export default TestUseRef;
