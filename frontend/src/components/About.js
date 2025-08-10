import React from 'react'
import './About.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faNewspaper, faMoneyBillTrendUp, faChalkboardUser, faRobot } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(props) {
    AOS.init({ duration: 1000 });
    const responsive = {
        0: {
            items: 1, 
        },
        730: {
            items: 2
        },
        1024:{
            items:3
        },
        1100:{
            items:4
        }
        
    };
    const items = [
        <div className="about-child" >
            <FontAwesomeIcon className='fs-1 bd' icon={faHandHoldingDollar} />
            <span className='fs-5' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Price Tracking</span>
            <p style={{ color: props.theme === 'light' ? 'black' : 'white', fontSize: '14px' }}>Monitoring the current and historical prices of crypto.This information is crucial for investors and traders to make informed decisions.</p>

        </div>,
        <div className="about-child" >
            <FontAwesomeIcon className='fs-1 bd' icon={faMoneyBillTrendUp} />
            <span className='fs-5' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Market Cap</span>
            <p style={{ color: props.theme === 'light' ? 'black' : 'white', fontSize: '14px' }}>Understanding the total market value of a cryptocurrency, calculated by multiplying the current price by the total circulating supply.</p>

        </div>,
        <div className="about-child">
            <FontAwesomeIcon className='fs-1 bd' icon={faNewspaper} />
            <span className='fs-5 ' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>News and Events</span>
            <p style={{ color: props.theme === 'light' ? 'black' : 'white', fontSize: '14px' }}>Staying updated on news and events that can influence cryptocurrency prices. This is also beneficial information for investors and traders in this field</p>

        </div>,
        <div className="about-child" >
            <FontAwesomeIcon className='fs-1 bd' icon={faChalkboardUser} />
            <span className='fs-5' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Trading Education</span>
            <p style={{ color: props.theme === 'light' ? 'black' : 'white', fontSize: '14px' }}>In this educational section, we aim to demystify the world of cryptocurrency trading for beginners.Empower your trading journey with our comprehensive education hub</p>

        </div>,
        <div className="about-child" >
            <FontAwesomeIcon className='fs-1 bd' icon={faRobot} />
            <span className='fs-5' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>AI ChatBot</span>
            <p style={{ color: props.theme === 'light' ? 'black' : 'white', fontSize: '14px' }}>Introducing our AI-powered chatbot, your personal assistant in the world of cryptocurrency. Making navigating the complexities of the crypto space as easy as having a conversation</p>

        </div>


    ];
    return (
        <div className='about-container' data-aos="fade-up">
                <div className="about-data text-center " >
                    <h2 style={{ color: props.theme === 'light' ? 'black' : 'white' }}>What is CryptoPulse ?</h2>
                    <span className='fs-5' style={{ color: props.theme === 'light' ? 'black' : 'white' }}> Monitoring and analyzing the performance of digital currencies in real-time</span>
                </div>
                <div className="carousal">
                    <AliceCarousel
                        mouseTracking
                        responsive={responsive}
                        disableButtonsControls
                        keyboardNavigation
                        controlsStrategy="default"
                        
                        
                        
                        items={items}
                    />
                </div>


        </div>
    )
}
