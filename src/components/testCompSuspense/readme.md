#### Suspense 
##### <Suspense>允许在子组件完成加载前展示后备方案

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```
##### 用法
- 当内容正在加载时显示后备方案
- 同时展示内容
- 逐步加载内容
- 在新内容加载时展示过时内容
- 阻止隐藏已经显示的内容
- 表明Transition正在发生
- 在导航时重置Suspense边界
- 为服务器错误和客户端内容提供后备方案
##### 故障排除
- 如何阻止UI在更新期间被后备方案替换

##### 注意
###### 只有启用了Suspense的数据源才会激活Suspense组件
- 支持Suspense的框架如Relay和Next.js
- 使用lazy懒加载组件代码
- 使用use读取Promise的值
  
Suspense无法检测在Effect或事件处理程序中获取数据的情况。

目前尚不支持在不使用固定框架的情况下进行启用Suspense的数据获取。实现支持Suspense数据源的要求是不稳定的，也没有文档。React将在未来的版本中发布官方API，用于Suspense集成数据源。

##### 同时展示内容
默认情况下，Suspense内部的整颗组件树都被视为一个单独的单元。例如，即使只有一个组件因等待数据而被挂起，Suspense内部的整颗组件树中的所有的组件都将被替换为加载中指示器

##### 逐步加载内容
当一个组件被挂起时，最近的父级Suspense组件将显示后备方案。如果父级组件也被挂起，那么父级组件的父级组件将显示后备方案，以此类推，直到找到显示后备方案的Suspense组件。

##### 过时内容
当新的内容加载时，过时的内容将被替换为新的内容。过时的内容将保持可见，直到新的内容加载完成。

##### 阻止隐藏已经显示的内容
默认情况下，当新的内容加载时，过时的内容将被替换为新的内容。过时的内容将保持可见，直到新的内容加载完成。

##### 表明Transition正在发生