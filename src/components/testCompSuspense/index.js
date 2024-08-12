/**
 * 应该和 lazy 配合使用
 */
import React, { lazy, Suspense, useTransition } from 'react';
// import Child from './Child';

const Child = lazy(() => delayFormDemo(import('./Child')))

function Loading() {
  return <>is loading ...</>
}

function TestCompSuspense() {
  const [val, setVal] = React.useState(null);

  const [isPending, startTransition] = useTransition();

  const handleSelect = (e) => {
    startTransition(() => {
      setVal(e.target.value);
    });
    // setVal(e.target.value);
  };

  console.log('isPending ', isPending);
  return (
    <Suspense fallback={<Loading />}>
      <select onChange={handleSelect}>
        <option value={1} key={1}>1</option>
        <option value={2} key={2}>2</option>
      </select>
      { +val !== 1 && <Child type={val} />}
      { +val === 1 && <Child type={val} />}
    </Suspense>
  );
}

function delayFormDemo(fn) { return new Promise(resolve => setTimeout(() => resolve(fn), 3000)) }

export default TestCompSuspense;