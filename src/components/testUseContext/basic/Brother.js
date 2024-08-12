import React, { useContext } from 'react';
import { ThemeBrotherContext } from './constant';

function Brother() {
  const text = useContext(ThemeBrotherContext);

  return (
    <div>
      Brother value is: {text}
    </div>
  );
}

export default Brother;
