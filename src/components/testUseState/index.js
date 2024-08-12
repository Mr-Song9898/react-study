import React from 'react';

function TestUseState() {
  const [num, setNum] = React.useState(0);

  const handleClick = () => {
    console.log('num before setNum', num);
    // setNum(num + 1);
    setNum((n) => n + 1);
    setNum((n) => n + 1);

    console.log('num after setNum', num);
  };

  return (
    <>
      num is : {num} <br />
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default TestUseState;
