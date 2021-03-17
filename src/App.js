import './App.css';
import ReactECharts from 'echarts-for-react';
import Chart01 from './components/Chart01';
import Chart02 from './components/Chart02';
function App() {
  return (
    <div className="App">
      <Chart01 />
      <hr />
      <Chart02 />
    </div>
  );
}
export default App;
