import React, { useContext } from 'react';
import { WatchlistContext } from '../Context/Watchlistcontext';
// import { Link } from 'react-router-dom';
import './Watchlistpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons'


export default function WatchlistPage(props) {
  // const [upbar, setupbar] = useState('watchlist-close');
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
  // let showbar =()=>{
  //   if(upbar==='watchlist-close')
  //     setupbar('watchlist-open')
  //   else{

  //   }
  // }
  const calculateProfit = (percentage) => {
    const colorClass = percentage >= 0 ? 'text-success' : 'text-danger';
    return (
      <span className={colorClass}>
        {percentage >= 0 ? `+${percentage.toFixed(3)}%` : `${percentage.toFixed(2)}%`}
      </span>
    );
  };
  const addCommas = (value) => {
    // Convert the value into commas---------------
    return String(value).replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <div className="watchlist" style={{
                    backgroundColor:
                      props.theme === 'light'
                        ? ' rgba(197, 196, 196, 0.377)'
                        : props.theme === 'dark'
                          ? 'rgba(0, 0, 0, 0.377)'
                          : ''
                  }}>
        <div className="uperbar" style={{
                    backgroundColor:
                      props.theme === 'light'
                        ? ' rgb(233, 230, 230)'
                        : props.theme === 'dark'
                          ? 'rgb(66, 66, 66)'
                          : ''
                  }}>
          <FontAwesomeIcon style={{ color: '#ffc011' }} icon={faXmark} onClick={props.closebar} className='close-btn' />
          <div className="watchlist-page">
            <h2 className='text-center my-2' style={{ color: '#ffc011' }}> Watchlist</h2>
            {watchlist.length === 0 ? (
              <p style={{ color: props.theme === 'dark' ? 'white' : '', marginLeft: '10px' }}>Your watchlist is empty.</p>
            ) : (
              <div className="watchlist-area" style={{ color: props.theme === 'dark' ? 'white' : '' }}>
                {watchlist.map((coin) => (
                  <div key={coin.id} className="watchlist-item" style={{
                    backgroundColor:
                      props.theme === 'light'
                        ? 'rgba(255, 255, 255, 0.322)'
                        : props.theme === 'dark'
                          ? 'rgba(0, 0, 0, 0.226)'
                          : ''
                  }}>

                    <div className="watchlist-info">
                      <div className="coin-data">
                        <span className='mx-1'> {coin.market_cap_rank}</span>
                        <img src={coin.image} alt={coin.name} />
                      </div>
                      <span>{capitalizeFirstLetter(coin.symbol)}</span>
                      <span>${addCommas(coin.current_price.toFixed(2))}</span>
                    </div>
                    <div className="24H-percentage">
                      <span>{calculateProfit(coin.price_change_percentage_24h)} <span style={{ fontSize: '12px' }}>(1D)</span> </span>

                    </div>
                    <FontAwesomeIcon
                      style={{ color: '#ffc011' }}
                      icon={faTrash}
                      className="delete-btn"
                      onClick={() => removeFromWatchlist(coin.id)}
                    />

                  </div>

                ))}

              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
