import React from 'react'
import axios from 'axios';
import './Chart.css'
import Spinner from './Spinner';
import { useEffect,useState } from 'react';
import moment from 'moment/moment';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export default function Chart({id}) {
  const [coinChartData, setCoinChartData] = useState([]);
  const [days, setdays] = useState(7);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const charturl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
        setloading(true)
        const response = await axios.get(charturl);
        const prices = response.data.prices;
        setloading(false)
        const formattedData = prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
        setCoinChartData(formattedData);
        console.log(response.data)
      } catch (error) {
        console.log('Error fetching chart data:', error);
      }
    };
    
    fetchData();
  }, [id ,days]);
  if (loading) {
    return <div className='loader-div'>
      <Spinner/>
    </div> ;
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: false,
        label: id,
        data: coinChartData.map(val => val.y),
        borderColor: '#ffc011',
        borderWidth:'3',
        pointRadius: 0,
        cubicInterpolationMode: 'monotone'
      }
    ]
  }
  const options = {
    scales: {
      x: {
        grid: {
          display: false 
        }
      },
      y: {
        grid: {
          display: false 
        }
      }
    }
  };
  const changedays = (number) => {
    setdays(number);
  };
  return (
    <>
    <div className='chart-setting'>
      <Line data={data} options={options} />
      <div className="day-buttons">
       <button className='btn' onClick={() => changedays(7)}>7 Days</button>
       <button className='btn' onClick={() => changedays(30)} > 1 Month</button>
       <button className='btn' onClick={() => changedays(90)} > 3 Month</button>
       <button className='btn' onClick={() => changedays(365)}>1 Year</button>
      </div>
    </div>
    </>
    
  )
}
