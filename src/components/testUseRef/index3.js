import React from 'react';

function TestUseRef() {
  const [startTime, setStartTime] = React.useState(null);
  const [now, setNow] = React.useState(null);

  const intervalRef = React.useRef(null);

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

  return (
    <>
      开始了：{secondsPassed}
      <br />
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>暂停</button>
    </>
  );
}

export default TestUseRef;
