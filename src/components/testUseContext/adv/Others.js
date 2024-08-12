import React, { useId } from 'react';
import { useTasks } from './TaskContext';

function Others() {
  // useTasks();
  console.log('other is running ');
  const id = useId();
  const handleCopy = (e) => {
    console.log('a, b===>> is copying ', e.target);
  };
  return <div title="hello" onCopy={handleCopy} id={id} dir="ltr" >other</div>;
}

export default Others;
