import React, { useDebugValue, useSyncExternalStore } from 'react';

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);

  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

function getSnapshot() {
  return window.navigator.onLine;
}


function useOnline() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot)

  useDebugValue(isOnline ? '在线' : '离线');

  return isOnline;
}

export default useOnline;
