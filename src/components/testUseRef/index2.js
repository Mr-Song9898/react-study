import React from 'react';

function TestUseRef() {
  const [_, reRender] = React.useState({});
  const ref = React.useRef(0);

  const handleClick = () => {
    ref.current += 1;

    reRender({});
  };

  const handleReset = () => {
    ref.current = 0;
    reRender({});
  };

  return (
    <>
      {/* TODO 不要在渲染期间 读取ref 这里是错误的 只可以在事件处理函数中，或Effect中读取或变更ref */}
      点击了：{ref.current}次
      <button onClick={handleClick}>点击</button>
      <button onClick={handleReset}>重置</button>
    </>
  );
}

export default TestUseRef;
