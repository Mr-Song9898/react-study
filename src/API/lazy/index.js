import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function Loading() {
  return <span>is loading</span>
}

function TestLazy() {
  return (
    <>
      <h2>test lazy</h2>
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    </>
  );
}

export default TestLazy;
