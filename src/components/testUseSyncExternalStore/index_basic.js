import React, { useSyncExternalStore } from 'react';
import { todoStore } from './todeStore';

// hydration 水合作用
// sync 同步
// external 外部
// store 商店
// subscribe 订阅
// snapshot 快照
// server 服务

function TestUseSyncExternalStore() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot, todoStore?.getServerSnapshot);

  console.log('todos ', todos);

  return (
    <div>
      <h3>Test UseSyncExternalStore</h3>
      <button onClick={() => todoStore.addTodo('new todo')}>add +</button>
      <hr /><br/>
      {
        todos.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.id}、</span>
              <span>{item.text}</span>
            </div>
          );
        })
      }
    </div>
  );
}

export default TestUseSyncExternalStore;
