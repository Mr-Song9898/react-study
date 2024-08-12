import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';

const TaskContext = createContext([]);
const DispatchContext = createContext(() => {});
const NoUseContext = createContext('这个是没有用到的context');

const initValue = [
  { id: 1, value: 'Learn React' },
];

const formatDefaultValue = (initValue) => {
  return initValue.map((item, index) => {
    return { ...item, label: index + 1, desc: '这些都是是format后的数据' };
  })
};

const tasksReducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'add':
      const index = state.length + 1;
      return [...state, { ...payload, label: index, id: Math.random() }];
    case 'remove':
      return state.filter(item => item.id !== payload.id);
    case 'edit':
      return state.map(item => item.id === payload.id ? { ...item, ...payload } : item);
    default:
      throw Error('Unknown action type: ' + type);
  }

}

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initValue, formatDefaultValue)

  // 这里 使用useMemo 也不能优化渲染
  const tasksContext = useMemo(() => {
    return tasks;
  }, [tasks]);

  const dispatchContext = useCallback((params) => { dispatch(params); }, [dispatch]);

  return (
    <TaskContext.Provider value={tasksContext}>
      <DispatchContext.Provider value={dispatchContext}>
        {children}
      </DispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export const useTasks = () => {
  return useContext(TaskContext);
};

export const useDispatch = () => {
  return useContext(DispatchContext);
}

export const useNoUse = () => {
  return useContext(NoUseContext);
}