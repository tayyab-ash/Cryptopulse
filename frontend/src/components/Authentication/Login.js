import React, { useEffect } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import googlepng from './google.png'
// import axios from 'axios';
import { useState } from 'react';

export default function Login(props) {

  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const [error, seterror] = useState(false);

  const navigate = useNavigate()

  let token
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
       token =  localStorage.setItem("token", json.authToken);
        navigate("/crypto");

      } else {
        // alert("wrong credentials")
        seterror(true)
        setTimeout(() => {
          seterror();
        }, 2000);
      }
    } catch (error) {
      console.error("There was an error with the fetch operation:", error);
    }
  };

  useEffect(()=>{

  },[token])

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };



  return (
    <div className='lgn-container'>
      <div className="main-login" style={{ backgroundColor: props.theme === 'light' ? 'aliceblue' : 'rgb(46, 45, 45)' }}>
        <div className="lgn-png">
          <FontAwesomeIcon className='fs-1' style={{ color: '#ffc011' }} icon={faUser} />
          <span className='fs-2' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>LOGIN</span>
        </div>
        <form onSubmit={handleSubmit}>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
            >
              <Form.Control type="email" placeholder="name@example.com" name='email'
                onChange={onChange}
                required />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password"
                placeholder="Password" name='password'
                onChange={onChange}
              />
            </FloatingLabel>
          </>
          {/* { error   && <span className='text-danger'></span>} */}
          
         { error && <div class="alert alert-danger" style={{ margin:'0'}} role="alert">
          Wrong Creditionals
          </div>}
          <button type='submit' className='btn' style={{ backgroundColor: '#ffc011' }}>Login</button> 
        </form>
        <span className='no-account' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>If you have no Account ? <Link to='/Signup'>Signup</Link></span>
        <span className='no-account' style={{ color: props.theme === 'light' ? 'black' : 'white' }}> Continue with <Link ><img src={googlepng} alt="" /></Link> </span>
      </div>
    </div>
  )
}
