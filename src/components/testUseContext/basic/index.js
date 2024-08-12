import React from 'react';
import Child from './Child';
import Brother from './Brother';
import { ThemeBrotherContext, ThemeContext } from './constant';

function TestUseContext() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  return (
    <ThemeBrotherContext.Provider value={text2}>
      <ThemeContext.Provider value={text}>
        child:<input type="text" onChange={handleChange} /><br />
        brother:<input type="text" onChange={handleChange2} />
        <Child text={text} />
        <Brother text={text} />
      </ThemeContext.Provider>
    </ThemeBrotherContext.Provider>
  );
}

export default TestUseContext;
