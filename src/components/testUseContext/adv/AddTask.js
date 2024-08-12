import React, { memo, useCallback, useRef } from 'react';
import { useDispatch, useNoUse } from './TaskContext';
import useKeyBoard from './useKeyBoard';

// const AddTask = memo();

function AddTask() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  // const noUse = useNoUse();

  // console.log('noUse===>>> ', noUse);

  const handleAdd = useCallback(() => {
    const value = inputRef.current.value;

    if (!value) {
      alert('Please enter a value');
      return;
    }

    dispatch({
      type: 'add',
      payload: { value },
    });

    inputRef.current.value = '';
    inputRef.current.blur();
  }, [dispatch]);

  useKeyBoard('ipt', handleAdd);

  console.log('addTask is render');

  return (
    <div>
      <input id='ipt' ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleAdd}>plus +</button>
    </div>
  );
}

export default AddTask;