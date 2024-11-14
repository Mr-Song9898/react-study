// 配置规则：https://echarts.apache.org/zh/option.html#series-map
export const options = {
  legend: {
    // 图例的显示位置
    orient: "vertical", // 图例列表的布局朝向，'horizontal' 为水平,'vertical' 为垂直
    x: "left", // 水平安放位置，默认为 'center'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
    y: "top", // 垂直安放位置，默认为 'top'，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
  },
  visualMap: {
    show: false,
    inRange: {
      // color: 'rgba(118,156,201)',
      color: '#057AFF',
    },
  },
  series: [
    {
      type: "map",
      map: "china", // 使用注册的中国地图
      roam: true, // 是否开启鼠标缩放和平移
      selectedMode: false, // 选中模式，表示是否支持多个选中，默认为'multiple'，可选为'multiple' | 'single'
      emphasis: { // 高亮状态配置
        disabled: true,
      },
      itemStyle: {
        color: '#057AFF', // 图形的颜色
        // color: 'rgba(118,156,201)', // 图形的颜色
        borderColor: "#aaa",
        areaColor: 'rgba(226,239, 254)', // 地图区域的颜色
      },
      data: [
        { name: "江苏省", value: 1 },
        { name: "安徽省", value: 10 },
        { name: "河南省", value: 1, },
        { name: "浙江省", value: 1 },
        { name: "福建省", value: 1 },
        { name: "广东省", value: 1 },
        { name: "江西省", value: 1 },
      ],
    },
  ],
};
