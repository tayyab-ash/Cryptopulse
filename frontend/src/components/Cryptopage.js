import './Cryptopage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faCircleArrowLeft, faCircleArrowRight, faDollarSign, faChartSimple, faChartLine, faArrowsSpin, faFilterCircleDollar, faCoins, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons'
import Spinner from './Spinner';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Cryptopage(props) {
  const itemsPerPage = 20;
  const [gifer, setgifer] = useState(false);
  const [Coinname, setCoinname] = useState([]);
  const [pagination, setpagination] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  let apikey = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en'

  useEffect(() => {
    setgifer(true)
    axios.get(apikey).then((Response) => {
      setgifer(false)
      setCoinname(Response.data)
      setTotalPages(Math.ceil(Response.data.length / itemsPerPage));
      console.log(Response.data)

    })
      .catch((err) => {
        console.log(err)
      })



  }, [apikey]);

  // gifer-----------
  if (gifer) {
    return <div className='giffer-div'>
      <Spinner/>
    </div> ;
  }

  // Pagination handlers
  const nextPage = () => {
    setpagination(pagination + 1);
  };

  const prevPage = () => {
    if (pagination > 1) {
      setpagination(pagination - 1);
    }
  };
  // profit percentage ------------------------------------------
  const calculateProfit = (percentage) => {
    const colorClass = percentage >= 0 ? 'text-success' : 'text-danger';
    return (
      <span className={colorClass}>
        {percentage >= 0 ? `+${percentage.toFixed(2)}%` : `${percentage.toFixed(2)}%`}
      </span>
    );
  };
  // formet like Billion or million ----------------------
  // const formatMarketCap = (marketCap) => {
  //   if (marketCap >= 1e9) {
  //     return (marketCap / 1e9).toFixed(2) + ' B';
  //   } else if (marketCap >= 1e6) {
  //     return (marketCap / 1e6).toFixed(2) + ' M';
  //   } 
  //   else {
  //     return marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //   }
  // };

  // calculate 7 days percentage----------------------
  const calculate7DayChange = (percentage24h) => {
    const percentage7d = Math.pow(1 + percentage24h / 100, 7) - 1;
    return percentage7d.toFixed(2);
  };

  const addCommas = (value) => {
    // Convert the value into commas---------------
    return String(value).replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // input search field------------------
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // filter coin names using the text field-----------------------
  const filteredCoins = Coinname.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // capitalize the 1st letter of symbil-------------------------
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <div className="coindata">

        {/* main heading start here-------- */}
        <div className='heading'>
          <h3 style={{ color: props.theme === 'light' ? 'black' : 'white' }}>  All Cryptocurrencies <FontAwesomeIcon className='fs-3' style={{ color: '#ffc011' }} icon={faFire} /></h3>
          <div className="bar form-floating " style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
            <input className="form-control" id="floatingInput" type="text" placeholder='Search coin' onChange={handleSearch} />
            <label  className='d-flex justify-content-start align-items-center gap-1'> <FontAwesomeIcon style={{ color: '#ffc011' }} icon={faMagnifyingGlassDollar} />Search coin</label>
          </div>
        </div>

        {/* list name start here--------------- */}
        <div className=" dataname text-start" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
          <div className="row">
            <div className="col-3 " >
              <span style={{ marginLeft: '40px' }}> <FontAwesomeIcon icon={faCoins} style={{ color: '#ffc011' }} /> Coin List</span>
            </div>
            <div className="col mx-1"><span> <FontAwesomeIcon icon={faDollarSign} style={{ color: '#ffc011' }} /> Price</span></div>
            <div className="col hide-3 "><span> <FontAwesomeIcon icon={faChartSimple} style={{ color: '#ffc011' }} /> 24H%</span></div>
            <div className="col hide-4"><span> <FontAwesomeIcon icon={faChartLine} style={{ color: '#ffc011' }} /> 7D%</span></div>
            <div className="col hide-5"><span> <FontAwesomeIcon icon={faFilterCircleDollar} style={{ color: '#ffc011' }} /> Market Cap</span></div>
            <div className="col hide-6"><span> <FontAwesomeIcon icon={faArrowsSpin} style={{ color: '#ffc011' }} /> Total Supply</span></div>
          </div>
        </div>
 
        {/* <div className="giffer-div ">
          {gifer && <Spinner />}
          </div> */}

      <div className=" wd text-start" style={{ color: props.theme ===    'light' ? 'black' : 'white' }}>
          {/* <Link to='/coinpage' style={{ color: props.theme === 'light' ? 'black' : 'white' }}> */}
          <div className="row">
            {filteredCoins.slice((pagination - 1) * itemsPerPage, (pagination - 1) * itemsPerPage + itemsPerPage).map((coin) => (
              <Link to={`/coinpage/${coin.id}`} style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                <div className="fetchdata" key={coin.id}>

                  {/* coin----------------------------------- */}

                  <div className="col-2 token">
                    <span>{coin.market_cap_rank}</span>
                    <img src={coin.image} alt="" />
                    <div className=" symbl">
                      <span className='fs-5 '>{capitalizeFirstLetter(coin.symbol)}</span>
                      <span style={{ fontSize: '13px' }}>{coin.name}</span>
                    </div>
                  </div>
                  {/* price--------------------------------------------- */}
                  <div className="col ">
                    <span>{'$' + addCommas(coin.current_price)}</span>
                  </div>
                  {/* volume 24H%-------------------------------- */}
                  <div className="col hide-3">
                    <span>{calculateProfit(coin.price_change_percentage_24h)}</span>
                  </div>
                  {/* volume 7D%-------------------------------- */}
                  <div className="col hide-4 ">
                    <span>{calculate7DayChange(coin.price_change_percentage_24h) + "%"}</span>
                  </div>
                  {/* market cap-------------------------------- */}
                  <div className="col hide-5  ">
                    {/* <span>{'$' + formatMarketCap(coin.market_cap)}</span> */}
                    <span>{'$' + coin.market_cap}</span>
                  </div>
                  {/* total supply-------------------------------- */}
                  <div className="col-1 text-start hide-6 " >
                    {/* <span>{formatMarketCap(coin.total_supply)}</span> */}
                    <span>{coin.total_supply}</span>
                  </div>

                </div>
              </Link>


            ))}

          </div>
          {/* </Link> */}

          <div className="pagination">
            <FontAwesomeIcon className='fs-4' style={{ cursor: 'pointer' }} onClick={prevPage} disabled={pagination === 1} icon={faCircleArrowLeft} />
            <div className="number">
              <span> <span className='pagecss'>{pagination}</span> --- <span className='totalpagecss'>{totalPages}</span></span>
            </div>
            <FontAwesomeIcon className='fs-4' style={{ cursor: 'pointer' }} onClick={nextPage} icon={faCircleArrowRight} />
          </div>
        </div>

      </div >
    </>
  )
}
