import React from "react";
import Child from "../child";

import EBoundary from '../hooks/useError';

export default function ErrorBoundary() {
  return (
    <div className="App">
      <EBoundary fallback={<div>hasError</div>}>
        <Child />
      </EBoundary>
    </div>
  );
}