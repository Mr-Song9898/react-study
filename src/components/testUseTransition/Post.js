import React, { memo, useEffect, useState } from "react";

function SlowPost({ index }) {
  const startTime = performance.now();

  while (performance.now() - startTime < 10) {
    // do nothing
  }

  return (
    <li>
      Post # {index}
    </li>
  );
}

const useList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getList = () => {
    let items = [];
    for (let i = 0; i < 100; i++) {
      items.push(<SlowPost key={i} index={i} />);
    }

    setList(items);
    setIsLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return { list, isLoading };
};

const Post = memo(() => {
  // const { list, isLoading } = useList();
  // const [list, setList] = useState([]);

  // console.log('isLoading ', isLoading);

  let list = [];
  for (let i = 0; i < 100; i++) {
    list.push(<SlowPost key={i} index={i} />);
  }

  // if (isLoading) return <div>Loading</div>;

  // useEffect(() => {
  //   let list = [];
  //   for(let i = 0; i < 100; i++) {
  //     list.push(<SlowPost key={i} index={i} />);
  //   }

  //   setList(list);
  // }, []);

  return <ul>{list}</ul>;
});

export default Post;
