import React from 'react';
import Tabs from './tabs';
import RadioGroup from './radioGroup';
import Chart from './chart';
import List from './list';

import './index.css';

const tabs = [
  {
    label: '日用电量',
    value: 'day',
  },
  {
    label: '月度电费',
    value: 'month',
  }
];

export default function Container() {
  const [activeTab, setActiveTab] = React.useState('day');
  
  return (
    <div className='dianContainer'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} dataSource={tabs}/>
      <RadioGroup />
      <Chart />
      <List />
    </div>  
  )
}