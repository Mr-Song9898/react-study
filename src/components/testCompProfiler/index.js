import React, { Profiler } from 'react';

function TestCompProfiler() {
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
  };

  return (
    <>
      <Profiler id="testCompProfiler" onRender={onRender}>
        TestCompProfiler
      </Profiler>
    </>
  );
}

export default TestCompProfiler;