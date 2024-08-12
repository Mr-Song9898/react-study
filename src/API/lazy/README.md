### lazy
能够让你在组件第一次被渲染之前延迟加载组件的代码
```jsx
const LazyComponent = lazy(() => import('./MyComponent.js'))
```
##### 参考
`lazy(load)`
`load函数`
##### 使用方法
  - 使用Suspense实现懒加载组件

##### 参数
- `load`:一个返回[Promise]()或另一个thenable（具有`then`方法的类Promise对象）的函数。React不会在你尝试首次渲染返回的组件之前调用`load`函数。在React首次调用`load`后，它将等待其解析，然后将解析值的`.default`渲染为React组件。返回的Promise和Promise的解析值都将被缓存，因此React不会多次调用`load`函数。如果Promise被拒绝，则React将抛出拒绝原因给最近的错误边界处理。

##### 返回值 
`lazy`返回一个React组件，你可以在fiber树中渲染。当懒加载组件的代码仍在加载时，尝试渲染它将会处于暂停状态。使用`<Suspense>`可以在其加载时显示一个正在加载的提示。