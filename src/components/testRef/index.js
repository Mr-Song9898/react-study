import React, { useEffect, useRef, useState } from 'react';

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}

function TestRef() {
  const itemsRef = useRef(null);
  const [catList, setCatList] = useState([]);

  const getMap = () => {
    if (!itemsRef?.current) {
      itemsRef.current = new Map();
    }

    return itemsRef.current;
  }

  const scrollToCat = (cat) => {
    const map = getMap();
    const ele = map.get(cat);
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  useEffect(() => {
    setCatList(setupCatList());
    console.log('itemsRef.current ', itemsRef.current);
  }, []);
  
  return (
    <>
      <h3>ref 回调函数</h3>
      <nav>
        <button onClick={() => { scrollToCat(catList[3]) }}>tom</button>
        <button onClick={() => { scrollToCat(catList[7]) }}>jerry</button>
        <button onClick={() => { scrollToCat(catList[5]) }}>hello kt</button>
      </nav>
      <ul>
        {
          catList.map((cat) => {
            return (
              <li
                key={cat}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(cat, node);
                  } else {
                    map.delete(cat);
                  }
                }}
              >
                <img alt="" src={cat} />
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default TestRef;
