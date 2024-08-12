import React, { useSyncExternalStore } from 'react';
import { todoStore } from './todeStore';
import useOnline from './useOnline';
import useUser from './useUser';

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);

  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}


function TestUseSyncExternalStore() {
  // const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  const isOnline = useOnline();
  const userInfo = useUser();

  console.log('isOnline ', isOnline);
  console.log('userInfo ', userInfo);

  return (
    <div>
      <h3>Test UseSyncExternalStore</h3>
      {/* <button onClick={() => todoStore.addTodo('new todo')}>add +</button> */}
      <hr /><br/>
      <div>
        是否在线： <span>{isOnline ? '在线' : '离线'}</span>
      </div>
    </div>
  );
}

export default TestUseSyncExternalStore;
