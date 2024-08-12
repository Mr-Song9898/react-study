import React, { forwardRef, useEffect } from 'react';

// 避免重复创建ref的内容
function Video() {
  // 每次渲染都会 执行new VideoPlayer();
  // const videoRef = React.useRef(new VideoPlayer());

  // 解决
  const videoRef = React.useRef(null);
  if (videoRef.current === null) {
    // videoRef.current = new VideoPlayer();
  }

  // 或者
  const getPlayer = () => {
    if (videoRef.current) return videoRef.current;

    // const player = new VideoPlayer();
    // videoRef.current = player;

    // return player;
  };

  return (<>11</>);
}

function TestUseRef() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const videoRef = React.useRef(null);

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <>
      {isPlaying ? <button onClick={handleClick}>暂停</button> : <button onClick={handleClick}>播放</button>}
      <br />
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        controls
        onPlay={() => { setIsPlaying(true); }}
        onPause={() => { setIsPlaying(false); }}
      />
    </>
  );
}

export default TestUseRef;
