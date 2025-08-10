import React from 'react'
import './Chatbot.css'
import botimg from '../images/bot.webp'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane  } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Spinner from './Spinner';

export default function Chatbot(props) {
 const [question, setquestion] = useState('')
 const [answer, setanswer] = useState('')
 const [spinner, setspinner] = useState(false)
  const location = useLocation()
  async function generateanswer(e) {
    setspinner(true);
    e.preventDefault();
    setanswer( <div className="spinner-div">
    <Spinner />
  </div>);
    try {
      const response = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDuc4cfOcP1t2S1l8IY-Hrl9bM7opZtPcQ',
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setanswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setanswer("Sorry - Something went wrong. Please try again!");
    }

    setspinner(false);
  }
 
  const handleInputChange = (event) => {
    setquestion(event.target.value);
  };
  return (
    <div className="main-container ">
      <div className={`chat-code fixed bottom ${location.pathname === '/' ? 'hide' : ''} `} data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"> <img src={botimg} alt="" /></div>
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false"  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" style={{ backgroundColor: props.theme === 'dark' ? ' rgb(29, 27, 27)' : 'white' }}>
        <div className="offcanvas-header">
          <h3 className="offcanvas-title " id="offcanvasScrollingLabel" style={{ color: '#ffc011' }}>Pulse AI</h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ filter: props.theme === 'dark' ? 'invert(1)' : 'none' }}></button>
        </div>
        <div className="offcanvas-body" style={{ color: props.theme === 'dark' ? 'white' : 'black' }}>
          {/* <div className="type-writer my-2">
          <span>
            {typewriter}
          </span>
          </div> */}
          <div className="text-area">
            {/* <div className='spinner-setting'>{spinner && }</div> */}
            <div className="text-output">
              <pre>{answer}</pre>
            </div>
            <div className="text-input">
            <input type="text" placeholder='Enter Text'  style={{ color: props.theme === 'dark' ? 'white' : 'black',backgroundColor: props.theme === 'dark' ? 'rgb(49, 49, 49)' : '' }} onChange={handleInputChange} />
            <FontAwesomeIcon icon={faPaperPlane} style={{fontSize:'22px',color:'#ffc011',cursor:'pointer'}} onClick={generateanswer}  disabled={spinner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
