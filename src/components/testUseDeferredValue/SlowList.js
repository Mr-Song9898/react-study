import React, { memo } from 'react';

function SlowItem({ text }) {
  const startTime = performance.now();

  while(performance.now() - startTime < 10) {
    // nothing
  }

  return (<li>输入的内容是：<s>{text}</s></li>);
}

const SlowList = memo(function SlowList({ text }) {
  let list = [];

  for(let i = 0; i < 10; i++) {
    list.push(<SlowItem key={i} text={text} />);
  }

  return (
    <ul>
      {list}
    </ul>
  );
});

export default SlowList;
