import React, { memo } from 'react';
import { useDispatch, useTasks } from './TaskContext';

function Task({ value, label, id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{label}: {value}</span>
      <button onClick={() => dispatch({ type: 'remove', payload: { id } })}>-Remove</button>
    </div>
  );
};
 
// const TaskList = memo();

function TaskList() {
  const tasks = useTasks();

  console.log('TaskList is render ');

  return (
    <>
      {
        tasks.map((item) => <Task key={item.id} {...item} />)
      }
    </>
  );
}

export default TaskList;