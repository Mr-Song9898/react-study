import React, { forwardRef, useImperativeHandle } from 'react';

const ImperativeHandle = forwardRef(function ImperativeHandle(props, ref) {
  const inputRef = React.useRef(null);

  // console.log('input ', input.current);
  const a = 'hello';

  const getA = () => { return a; };

  useImperativeHandle(ref, () => {
    return {
      a,
      getA,
      focus: () => inputRef.current.focus(),
    };
  }, []);

  return (
    <input {...props} ref={inputRef} />
  );
}, []);

export default ImperativeHandle;
