import React, { useEffect, useState } from "react";
import "./App.css";
import ErrorBoundary from "./components/errorBoundary";
import ImperativeHandle from "./components/imperativeHandle";
import LayoutEffect from "./components/useLayoutEffect";
import UseMemo from "./components/useMemo";
import TestUseReduce from "./components/testUseReduce";
import TestUseRef from "./components/testUseRef";
import TestUseState from "./components/testUseState";
import TestUseSyncExternalStore from "./components/testUseSyncExternalStore";
import TestUseTransition from "./components/testUseTransition";
import TestUseDeferredValue from "./components/testUseDeferredValue";
import TestUseContext from "./components/testUseContext/basic";
import TestUerContextAdv from "./components/testUseContext/adv";
import TestCompProfiler from "./components/testCompProfiler";
import TestCompStrictMode from "./components/testCompStrictMode";
import TestCompSuspense from "./components/testCompSuspense";
import TestApi from "./API";
import TestLazy from "./API/lazy";
import TestRef from "./components/testRef";
import SortList from "./components/sortList";
import EchartsTest from "./components/echartsTest";
import ZIndex from "./components/zIndex";
import Ref from "./components/ref";
// import OnePx from "./components/onepx";
import { utils } from '@iyunbao/cr-engine';
import CssGuide from "./components/cssguide";
import useUserInfo from './store/userInfo';
import Dian from "./components/dian";

console.log('utils ', utils);
// function App() {
//   return (
//     <ErrorBoundary />
//   );
// }

// function App() {
//   const inputRef = React.useRef(null);
//   console.log('inputRef ', inputRef);

//   const a = inputRef.current?.getA();

//   console.log('a1 ', a);

//   return <ImperativeHandle ref={inputRef} />;
// }

// function App () {
//   return <LayoutEffect />
// }

// function App() {
//   const [b, setB] = useState({b:1});
//   const [c, setC] = useState({c:1});
//   const [_, rerender] = useState({});
//   const add = () => {
//     // const newB = {...b};
//     // const newC = {...c};
//     // newB.b += 1;
//     // newC.c += 1;
//     // setB(newB);
//     // setC(newC);

//     rerender({});
//   }

//   return <UseMemo b={b} c={c} add={add} />
// }

function App() {
  const { userInfo, setUserInfo } = useUserInfo();

  useEffect(() => {
    setUserInfo?.({
      name: 'test',
      age: 18,
    });
  }, [setUserInfo]);

  // return <TestUseReduce />
  // return <TestUseRef />
  // return <TestUseState />
  // return <TestUseSyncExternalStore />
  // return <TestUseTransition />
  // return <TestUseDeferredValue />
  // return <TestUerContextAdv />
  // return <TestCompProfiler />
  // return <TestCompStrictMode list={[1]} />
  // return <TestCompSuspense />
  // return <TestLazy />
  // return <TestRef />;
  // return <SortList />
  // return <EchartsTest />
  // return <ZIndex />
  // return <Ref />
  // return <OnePx />
  // return <CssGuide />
  return <Dian />
}

export default App;
