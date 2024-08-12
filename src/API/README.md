### 内置的React API
- `createContext` API可以创建一个context，你可以将其提供给子组件，通常会与`useContext`一起配合使用。
- `forwardRef`允许组件将DOM节点作为ref暴露给父组件。
- `lazy`允许你在props没有变化的情况下跳过组件的重新渲染。通常`useMemo`与`useCallback`会一起配合使用。
- `startTransition`允许你可以标记一个状态更新是不紧急的。类似于`useTransition`。
- `act`允许你在测试中包装渲染和交互，以确保在断言之前完成更新。
- `use`允许你读取资源的值，如Promise或上下文。