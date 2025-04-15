import React, { useEffect } from 'react';
import * as echarts from 'echarts';

import './index.css';

function Chart() {
  useEffect(() => {
    const chartDom = document.getElementById('main');
    const myChart = echarts.init(chartDom);
    let option;

    option = {
      xAxis: {
        type: 'category',
        // data: ['1月1日-\n1月31日', '2月1日-\n2月28日', '3月1日-\n3月31日', '4月1日-\n4月30日', '5月1日-\n5月31日', '6月1日-\n6月30日'],
        data: ['7月1日-\n7月31日', '8月1日-\n8月31日', '9月1日-\n9月30日', '10月1日-\n10月31日', '11月1日-\n11月30日', '12月1日-\n12月31日'],
      },
      yAxis: {
        type: 'value',
        alignTicks: true,
        nameLocation: 'center',
        // data: [0, 0.5, 1, 1.5, 2, 2.5, 3],
        axisLine: {
          show: true,
        },
        // minorTick: {
        //   show: false,
        // }
      },
      series: [
        {
          data: [0, 0, 0, 0, 2.1, 0],
          type: 'bar'
        }
      ]
    };

    option && myChart.setOption(option);
  }, []);
  return (
    <div className='chart'>
      <div className='chart-title'>
        <div className='unit'>
          <label>单位</label>
          <span>千瓦时</span>
        </div>
        <div>点击柱状图查看当月用电情况</div>
      </div>
      <div id="main" style={{ height: 380 }} />
    </div>
  );
}

export default Chart;
