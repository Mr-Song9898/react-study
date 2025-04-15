import React from 'react';
import { dataSource } from './constant';

import './index.css';

function List() {
  console.log('dataSource ', dataSource);
  return (
    <div className='list'>
      {
        dataSource.map((item, index) => {
          return (
            <div className='list-item' key={item.title}>
              <div className='list-title'>{item.title}</div>
              <div className='list-container'>
                <div className='date'>{item?.data.date}<span className='status'>（{item.data.status}）</span></div>
                <div className='valueContent'>
                  <div className='flexBox'>
                    <span className='val'>{item.data.total}</span>
                    <span className='lab'>本期电费（元）</span>
                  </div>
                  <div className='flexBox'>
                    <span className='val'>{item.data.pay}</span>
                    <span className='lab'>本期电量（千瓦时）</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default List;
