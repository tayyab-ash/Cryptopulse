import React from 'react'
import './Signup.css'
// import axios from "axios";
// import { Link} from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import googlepng from './google.png'
import { useState } from 'react';

export default function Signup(props) {

    const [credentials, setcredentials] = useState({fname: "", lname: "", email: "", password: "" });

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:3000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname: credentials.fname,
                lname: credentials.lname,
              email: credentials.email,
              password: credentials.password,
            }),
          });
          const json = await response.json();
          console.log(json);
        //   if (json.success) {
            localStorage.setItem("token", json.authToken);
            navigate("/crypto");
            
        //   } else {
            // alert("wrong credentials")
            // setcheckCredential('wrongCred')     
          //   setTimeout(() => {
          //     setcheckCredential('');
          // }, 2000); 
        //   }
        } catch (error) {
          console.error("There was an error with the fetch operation:", error);
        }
      };
    
      const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    

    return (
        <div className='lgn-container'>
            <div className="main-signup" style={{ backgroundColor: props.theme === 'light' ? 'aliceblue' : 'rgb(46, 45, 45)' }} >
                <div className="lgn-png">
                    <FontAwesomeIcon className='fs-1' style={{ color: '#ffc011' }} icon={faUser} />
                    <span className='fs-2' style={{ color: props.theme === 'light' ? 'black' : 'white' }}>SIGNUP</span>
                </div>


                <form onSubmit={handleSubmit} >
                    <FloatingLabel controlId="floatingPassword" label="First Name">
                        <Form.Control type="text" placeholder="Firstname" name='fname'
                        onChange={onChange}
                             />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Last Name">
                        <Form.Control type="text" placeholder="Lastname" name='lname'
                        onChange={onChange}
                             />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email address">
                        <Form.Control type="email" placeholder="name@example.com" name='email'
                        onChange={onChange}
                            />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password"
                        name='password' 
                        placeholder="Password"
                        onChange={onChange} />
                        
                    </FloatingLabel>
                    <button className='btn' style={{ backgroundColor: '#ffc011' }}>Signup</button>
                </form>
                <span className='no-account' style={{ color: props.theme === 'light' ? 'black' : 'white' }}> Continue with <Link><img src={googlepng} alt="" /></Link> </span>
            </div>
        </div>
    )
}
