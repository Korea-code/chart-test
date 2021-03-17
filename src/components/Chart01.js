import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import random from '../hooks/randomIncrease';
function Chart01() {
  const intervalId = useRef();
  const [data, setData] = useState([820, 932, 901, 934, 1290, 1330, 1320]);
  const [options, setOptions] = useState({
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    transform: {
      type: 'sort',
    },
    series: [
      {
        data,
        type: 'bar',
        smooth: true,
        sorted: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  });
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setData((prev) => {
        return prev.map((number) => random(number, 100));
      });
      setOptions((prev) => ({
        ...prev,
        series: [{ ...prev.series[0], data }],
      }));
    }, 500);
    return () => clearInterval(intervalId.current);
  }, [data]);
  return <ReactECharts option={options} />;
}
export default Chart01;
