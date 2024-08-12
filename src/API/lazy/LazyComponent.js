import React from 'react';

function Item({ i }) {
  const startTime = performance.now();

  while(performance.now() - startTime < 200) {
    // do nothing
  }

  return <div>{`item # ${i + 1}`}</div>
}

function LazyComponent() {
  let item = [];

  for(let i = 0; i < 2; i++) {
    item.push(<Item key={i} i={i} />);
  }

  return (
    <>
      <h3>LazyComponent</h3>
      {item}
    </>
  );
}

export default LazyComponent;
