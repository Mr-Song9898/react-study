import React, { useId, useState, useTransition } from 'react';
import About from './About';
import Post from './Post';
import Other from './Other';

function TestUseTransition() {
  const [tab, setTab] = useState('about');
  const [isPending, startTransition] = useTransition();
  // console.log('isPending ', isPending);

  const myID = useId(123);
  console.log('myID ', myID);

  const handleClick = (tab) => {
    console.log('1 ', 1);
    startTransition(() => {
      setTab(tab);
      console.log('2 ', 2);
    });
    // setTab(tab);
    console.log('3 ', 3);
  }

  return (
    <>
      <button id={myID} onClick={() => { handleClick('about'); }}>about</button>
      <button onClick={() => { handleClick('post'); }}>post</button>
      <button onClick={() => { handleClick('other'); }}>other</button>

      { tab === 'about' && <About /> }
      { tab === 'post' && <Post /> }
      { tab === 'other' && <Other /> }
    </>
  );
}

export default TestUseTransition;
