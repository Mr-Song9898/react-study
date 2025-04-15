import React, { useEffect } from 'react';
import './index.scss';
import useUserInfo from '../../store/userInfo';

function CssGuide() {
  const { userInfo } = useUserInfo();

  useEffect(() => {
    console.log('CssGuide ==>>userInfo ', userInfo);
  }, [userInfo]);

  return (
    <div>
      <h1>CSS 指南</h1>
      <div className="box">这是一个 CSS 指南的示例页面。</div>
    </div>
  );
}

export default CssGuide;
