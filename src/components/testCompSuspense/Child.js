import React, { useCallback, useEffect, useState, useTransition } from 'react';

function Item({ i, type }) {
  let now = performance.now();

  while(performance.now() - now < 1) {
    // do nothing
  }

  return <span>{`item #${i + 1} ?type=${type}`}</span>;
}

const useItems = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    Promise.resolve().then(() => {
      let startTime = performance.now();
      while(performance.now() - startTime < 10) {
        // do nothing
      }

      setList(Array(10).fill(null).map((_, i) => <Item key={i} i={i} />));
    });
  }, []);

  return list;
};

function Child({ type }) {
  const [list, setList] = useState([]);
  // const items = useItems();

  // const [isPending, startTransition] = useTransition();

  const getItems = useCallback(() => {
    let items = [];
    for(let i = 0; i < 10; i++) {
      items.push(<Item key={i} i ={i} type={type} />);
    }

    return items;
  }, [type]);
  
  useEffect(() => {
    setList(getItems());
  }, [getItems]);

  return <div>{
    list.map(item => item)
  }</div>;
}

export default Child;
