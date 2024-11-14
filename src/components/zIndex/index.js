import React, { useEffect } from 'react';

import './index.css'

export default function ZIndex() {
  const ele = document.getElementById('container');

  useEffect(() => {
    window.scrollTo({
      top: ele.offsetTop - ele.clientHeight / 2,
      behavior: 'smooth'
    })
  }, [ele]);
  return (
    <div className='container'>
      <div className='item'>ZIndex1</div>
      <div className='item'>ZIndex2</div>
      <div className='item item3' id="container">ZIndex3ZIndex3ZIndex3</div>
      <div className='item'>ZIndex4</div>
      <div className='item'>ZIndex5</div>
      <div className='mask'>
        <div className='mask-content' style={{ height: ele.clientHeight, width: '100%', top: ele.clientHeight / 2 }}>
          <div className='mask-tip'>mask</div>
          <div className='mask-btn'>知道了</div>
        </div>
      </div>
    </div>
  );
}