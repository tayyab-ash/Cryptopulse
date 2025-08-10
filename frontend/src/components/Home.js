import React from 'react'
import './Home.css'
import homepng from '../images/Bitcoin P2P.png'
import 'react-alice-carousel/lib/alice-carousel.css';
import Carosal from './Carosal';
import About from './About';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home(props) {
  AOS.init({ duration: 1000 });
  return (
    <>
      <div className={`${props.theme ==='light' ? 'changemode':'mainpage'}`}>
        <div className='home-container'  >
          <div className="home-info" data-aos="fade-right">
            <h2 style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Track Your Digital Assets In <b className={`${props.theme==='light'? 'b2':'b1'}`}
            style={{fontSize:"4rem"}}>CryptoPulse</b></h2>
            <span style={{ color: props.theme === 'light' ? 'black' : 'white' }}> CryptoPulse provide the easiest way to Track the real time detail of each coin.</span>
            <div className=" home-btn d-flex gap-3">
             <Link to='/Signup'> <button className='fw-bold btn1' style={{ color: props.theme === 'light' ? 'black' : '' }}> Let's Get Start </button></Link>
             <Link to='/Signup'><button className='btn2 same'  style={{ color: props.theme === 'light' ? 'black' : 'white'}}>See Details</button></Link>
            </div>
          </div>
          <div className="home-img" data-aos="fade-left">
            <img src={homepng} alt="" />
          </div>
        </div>
        <Carosal theme={props.theme} changetheme={props.changetheme} />
      </div>
      <About theme={props.theme} changetheme={props.changetheme}/>
    </>
  )
}
