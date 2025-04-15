import React from 'react';
import classNames from 'classnames';
import './index.css';

const years = [
  {
    label: '2025年',
    value: '2025'
  },
  {
    label: '2024年',
    value: '2024'
  },
  {
    label: '2023年',
    value: '2023'
  }
];

function RadioGroup() {
  const [activeRadio, setActiveRadio] = React.useState('2025');

  const handleClick = (item) => {
    console.log('item ', item);
    setActiveRadio(item.value);
  }

  return (
    <div className='radioGroup'>
      {
        years.map((item) => {
          const cls = classNames({
            'radio': true,
            'radioActive': item.value === activeRadio
          });
          return (
            <div className={cls} key={item.value} onClick={() => { handleClick(item); }}>
              <span>{item.label}</span>
            </div>
          )
        })
      }
    </div>
  )
}

export default RadioGroup;
