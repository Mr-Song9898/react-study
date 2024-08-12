import React, { useCallback, useEffect } from 'react';

export default function useKeyBoard(eleId, callback) {
  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === 13) {
      callback(e.target.value);
    }
  }, [callback]);

  useEffect(() => {
    const ele = document.getElementById(eleId);

    ele?.focus();

    ele?.addEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, eleId]);
}
