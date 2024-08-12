import React, { useDebugValue } from 'react';

function useUser() {
  useDebugValue('当前用户hooks');

  return { name: 'John Doe', age: 30 };
}

export default useUser;