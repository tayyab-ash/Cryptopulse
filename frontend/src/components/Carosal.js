import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carosal.css';
import Spinner from './Spinner';

export default function Carousel(props) {
  const [trending, setTrending] = useState([]);
  const [loading, setloading] = useState(false);
  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect(() => {
    setloading(true)
    axios.get(url).then((Response)=>{
      setTrending(Response.data)
      setloading(false)
    }).catch((err)=>{
      console.log(err)
    })
    
    
    
  }, []);
  const calculateProfit = (percentage) => {
    const colorClass = percentage >= 0 ? 'text-success' : 'text-danger';
    return (
      <span className={colorClass}>
        {percentage >= 0 ? `+${percentage.toFixed(2)}%` : `${percentage.toFixed(2)}%`}
      </span>
    );
  };

  const items = trending.map((coin) => (
    <div className="mover text-white" key={coin.id}>
      <a href={coin.id}>
        <img className='coinimg' src={coin.image} alt={coin.name} />
      </a>
      <span className='ptc' style={{ color: '#ffc011' }}>{coin.symbol} <span className='ptc1' > {calculateProfit(coin.price_change_percentage_24h)}</span></span>
      <span className='ptc' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>{coin.current_price + ' $'}</span>
    </div>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    450: {
      items: 3,
    },
    750: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  };

  return (
    <>
    <div className="text-center my-2">{loading && <Spinner/>}</div>
    <div className=''>
      <AliceCarousel
        mouseTracking
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        disableButtonsControls
        items={items}
        infinite
      />
    </div>
    </>
  );
}
