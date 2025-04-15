import React from 'react';
import './index.css';

export default function Title() {
  return (
    <div className='titleContainer'>
      <div className='title'>
        <div className='text'>*伟</div>
        <div className='btn'>切换户号</div>
      </div>
      <div className='labelValue'>
        <label>用电户号</label>
        <span>3208839459650</span>
      </div>
      <div className='address'>
        徐州市泉山区******2202室
      </div>
    </div>
  );
}
