import React, { useEffect, useState } from 'react';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Spinner from './Spinner';



export default function News(props) {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const newsapi = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(newsapi);
        const newsData = response.data.Data;
        setItems(newsData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Error fetching news');
        // setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className='newsloader'>
      <Spinner/>
    </div> ;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }



  return (
    <div style={{ marginTop: '100px' }}>
      <div className="heading text-center">
        <h3 style={{ color: props.theme === 'dark' ? 'white' : '' }}>
          <FontAwesomeIcon icon={faRss} style={{ color: '#ffc011' }} /> Crypto Highlights
        </h3>
      </div>

      <div className="news-data">
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-md-3 my-4" >
              <div className="card" style={{ width: '18rem', backgroundColor: props.theme === 'dark' ? ' rgb(36, 36, 36)' : '' }}>
                <img src={item.imageurl} alt={item.title} className="card-img-top"  />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: props.theme === 'dark' ? 'white' : '' }}>{item.title ? item.title.slice(0, 40) : '' || 'No Title'} <span className="badge text-bg-success">{item.categories ? item.categories.slice(0,8):''}</span></h5>
                  <p className="card-text" style={{ color: props.theme === 'dark' ? 'white' : '' }}>{item.body ? item.body.slice(0, 90) : "" || 'No Description Available'}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn ">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}







