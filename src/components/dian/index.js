import React from 'react';
import Title from './title';
import Container from './container';
import './index.css';

export default function Dian() {
  console.log('is render Dian ');
  return (
    <div className='body'>
      <Title />
      <Container />
    </div>
  );
}
