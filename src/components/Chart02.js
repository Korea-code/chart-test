import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import random from '../hooks/randomIncrease';
function Chart02() {
  const intervalId = useRef();
  const [data, setData] = useState([
    ['경일고등학교', 41],
    ['동래고등학교', 20],
    ['학산여자고등학교', 52],
    ['혜화여자고등학교', 37],
    ['사직고등학교', 25],
    ['동인고등학교', 19],
    ['경성전자고등학교', 71],
    ['동명공업고등학교', 36],
    ['계성여자고등학교', 67],
  ]);
  const [options, setOptions] = useState({
    dataset: [
      {
        dimensions: ['school', 'value'],
        source: data,
      },
      {
        transform: {
          type: 'sort',
          config: { dimension: 'value', order: 'asc' },
        },
      },
    ],
    xAxis: {},
    yAxis: {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 },
    },
    series: {
      type: 'bar',
      encode: { x: 'value', y: 'school' },
      datasetIndex: 1,
    },
  });
  useEffect(() => {
    intervalId.current = setInterval(() => {
      setData((prev) => {
        return prev.map((school) => [school[0], random(school[1], 30)]);
      });
      setOptions((prev) => ({
        ...prev,
        dataset: [
          { dimension: ['school', 'value'], source: data },
          {
            transform: {
              type: 'sort',
              config: { dimension: 'value', order: 'asc' },
            },
          },
        ],
      }));
      console.log(options);
    }, 500);
    return () => clearInterval(intervalId.current);
  }, [data]);
  return <ReactECharts option={options} />;
}
export default Chart02;
