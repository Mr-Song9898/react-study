import React, { useContext } from 'react';
import { ThemeContext } from './constant';

function Child() {
  const val = useContext(ThemeContext);
  return (
    <div>
      Child value is: {val}
    </div>
  );
}

export default Child;
