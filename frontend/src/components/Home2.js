import React from 'react'
import Carosal from './Carosal';
import { useTypewriter } from 'react-simple-typewriter'
import homepng from '../images/Bitcoin P2P.png'

export default function Home2(props) {
     const [typewriter] = useTypewriter({
          words: ['Track your crypto investments in real-time.','Learn the fundamentals and advanced strategies of crypto trading.','Chat with our AI-powered bot for instant trading tips and support.','Get the latest market analysis and trends to make informed decisions.'],
          loop: {},
          typeSpeed: 80,
          deleteSpeed: 20
        })
  return (
    <div className={`${props.theme ==='light' ? 'changemode':'mainpage'}`}>
        <div className='home-container' >
          <div className="home-info" data-aos="fade-right">
            <h2 style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Track Your Digital Assets In <b className={`${props.theme==='light'? 'b2':'b1'}`}
            style={{fontSize:"4rem"}}>CryptoPulse</b></h2>
            <span style={{ color: props.theme === 'light' ? 'black' : 'white',fontSize:'20px' }}> 
            {typewriter}
            </span>
          </div>
          <div className="home-img" data-aos="fade-left">
            <img src={homepng} alt="" />
          </div>
        </div>
        <Carosal theme={props.theme} changetheme={props.changetheme} />
      </div>
  )
}
