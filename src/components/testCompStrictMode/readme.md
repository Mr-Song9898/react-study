#### 开启严格模式
```jsx
import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
#### 严格模式的作用
- 组件将会重新渲染一次
- 组件将额外运行一次Effect的setUp和setClean函数
- 组件将被检查是否使用了已弃用的API