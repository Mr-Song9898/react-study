import React, { useEffect } from "react";
import { load } from "@iyunbao/utils";
import { options } from "./config";
// import * as china from './china.json';

function EchartsTest() {
  const [isFinished, setIsFinished] = React.useState(false);

  useEffect(() => {
    const fn = () => {
      setIsFinished(true);
    };
    load.js("//static.iyb.tm/web/lib/echarts/echarts.min.js", fn);
  }, []);

  useEffect(() => {
    if (isFinished) {
      const EchartsEle = document.getElementById("EchartsTest");
      const myChart = window.echarts.init(EchartsEle);

      fetch("//static.iyb.tm/web/lib/echarts/china_province.json")
        .then((res) => res.json())
        .then((res) => {
          console.log("res ", res);
          window.echarts.registerMap("china", res);
          myChart.setOption(options);
        });
    }
  }, [isFinished]);

  return (
    <div>
      <h1>Echarts Test</h1>
      <div id="EchartsTest" style={{ width: "100%", height: "500px" }} />
    </div>
  );
}

export default EchartsTest;
