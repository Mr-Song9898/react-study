import React from 'react';
import './index.css';
import classNames from 'classnames';

export default function Tabs({ dataSource, activeTab, setActiveTab }) {
  const handleClick = (item) => {
    setActiveTab(item.value);
  };

  return (
    <div className='tabContainer'>
      <div className='tabs'>
        {
          dataSource.map((item) => {
            const cls = classNames({
              tab: true,
              activeTab: item.value === activeTab,
            });
            return (
              <div className={cls} key={item.value} onClick={() => handleClick(item)}>
                <div className='tabLabel'>
                  <span>{item.label}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>  
  )
}