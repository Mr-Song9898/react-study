import React, { useReducer } from 'react';
import { useImmerReducer } from 'use-immer';

const reducer = (state, action)=> {
  const { type, ...rest} = action;
  console.log('state, action==>> ', state, action);

  const newState = { ...state, ...rest };

  switch (type) {
    case 'INCREMENT':
      console.log('INCREMENT==>> ', Object.is(state, action.state));
      return {
        ...state,
        age: state.age + 1
      };
    default:
      break;
  }

  throw Error('unknown action:' + action.type);

};

function Child() {
  console.log(' is running Child');
  return (
    <div>
      <h1>我是子组件</h1>
    </div>
  );
}

function TestUseReduce() {
  const [state, dispatch] = useReducer(reducer, { age: 18 }, (initState) => {
    console.log('initState==>init22 ', initState);
    return ({ ...initState, name: '张三' });
  });
  // const [state, dispatch] = useImmerReducer(reducer, { age: 18, name: '张三' });

  const { age, name, sex } = state || {};

  console.log('state==>> ', state);

  return (
    <>
      <span>年龄：{age}</span>
      <button onClick={()=> dispatch({ type: 'INCREMENT', state })}>age + 1</button>
      <span>姓名：{name}</span>
      <input onBlur={(e)=> dispatch({ type: 'INCREMENT2', name: e.target.value })} />
      <input type="radio" name="sex" value="男" onClick={()=> dispatch({ type: 'INCREMENT3', sex: '男'})} />男
      <input type="radio" name="sex" value="女" onClick={()=> dispatch({ type: 'INCREMENT4', sex: '女'})} />女
      <span>性别：{sex}</span>
      <Child />
    </>
  );
}

export default TestUseReduce;
