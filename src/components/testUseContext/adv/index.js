import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TaskContext';
import Others from './Others';

function TestUerContextAdv() {
  const [_, reRender] = useState(null);

  const addTask = renderToStaticMarkup(<AddTask />);

  return (
    <TasksProvider>
      <h3>useContext 进阶用法</h3>
      <AddTask />
      <TaskList />
      <button onClick={() => { reRender({}); }}>reRender</button>
      <br />
      {/* {addTask} */}
      <Others />
    </TasksProvider>
  );
}

export default TestUerContextAdv;
