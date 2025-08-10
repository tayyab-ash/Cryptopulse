import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColonSign, faStar, faBookOpen, faFileLines, faCirclePlay, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import { useState } from 'react'

export default function Navbar(props) {
    const location = useLocation()
    // const handleLogout = () => {
    // 	localStorage.removeItem("token");
    // 	window.location.reload();
    // };

    return (
        <nav style={{ padding: '6px 54px' }} className={`navbar navbar-expand-lg fixed-top navbar-${props.theme} bg-${props.theme}`}>
            <div className="container-fluid ">
                <Link className="navbar-brand d-flex align-items-center fs-4 fw-bold" to="/crypto"><FontAwesomeIcon icon={faColonSign} className='mx-1 fs-1' style={{ color: '#ffc011' }} />Crypto <span className=' mx-1 fw-light' style={{ color: '#ffc011' }}>Pulse</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto text-center mb-2 mb-lg-0  ">

                        <div className={`navlist adjust ${location.pathname === '/' ? '' : ' hidden'}`} >
                            <li className="nav-item">
                                <Link aria-current="page" to="/contact" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Contact & FAQs</Link>
                            </li>
                        </div>
                        <div className={`navlist adjust ${location.pathname === '/' || location.pathname === '/Diff' ? 'hidden' : "" || location.pathname === '/contact' ? 'hidden' : ""}`} >
                            <li className="nav-item">
                                <Link aria-current="page" href="/" style={{ color: props.theme === 'light' ? 'black' : 'white' }} to="/home2">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link aria-current="page" href="/" style={{ color: props.theme === 'light' ? 'black' : 'white' }} to="/crypto" >CryptoCoins</Link>
                            </li>
                            <li className="nav-item dropdown" >
                                <Link className="nav-link dropdown-toggle" href="/" to='/learn' role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>Learn</Link>
                                <ul className="dropdown-menu" style={{ backgroundColor: props.theme === 'dark' ? 'rgb(51, 49, 49)' : '' }}>
                                    <li  ><Link to='/discription' style={{ color: props.theme === 'dark' ? 'white' : '' }}> <FontAwesomeIcon className='fs-6' style={{ color: '#ffc011' }} icon={faBookOpen} /> Crypto Detail </Link></li>
                                    <li><Link style={{ color: props.theme === 'dark' ? 'white' : '' }} to='/articles'> <FontAwesomeIcon icon={faFileLines} style={{ color: '#ffc011' }} className='fs-6' />Crypto Articles</Link></li>
                                    <li>  <Link to='/videos' style={{ color: props.theme === 'dark' ? 'white' : '' }}> <FontAwesomeIcon icon={faCirclePlay} style={{ color: '#ffc011' }} className='fs-6' />Video Tutorials</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/cryptonews" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>News</Link>
                            </li>
                        </div>

                    </ul>
                    <div className={`navlist   ${location.pathname === '/' ? 'hidden' : "" || location.pathname === '/contact' ? 'hidden' : ""}`} >
                        <li className="nav-item " >
                            <Link className="nav-link"
                                href="/" onClick={props.showbar} style={{ color: props.theme === 'light' ? 'black' : 'white' }}> <FontAwesomeIcon icon={faStar} style={{ color: '#ffc011' }} /> Watchlist</Link>
                        </li>

                    </div>
                    <div className="d-flex justify-content-center align-item-center my-2 gap-3">
                        {/* theme button-------- */}
                        <label className="toggle" >
                            <input id="switch" className="input" type="checkbox" onChange={() => props.changetheme()} />
                            <div className="icon icon--moon">
                                <svg height="32" width="32" fill="rgb(43, 43, 43)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" ></path>
                                </svg>
                            </div>
                            <div className="icon icon--sun">
                                <svg height="32" width="32" fill="#ffc011" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                                </svg>
                            </div>
                        </label>
                        <Link className={`${location.pathname === '/' ? 'hidden' : ' '}`} ><FontAwesomeIcon icon={faUser} className=" nav-btn " type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" /></Link>
                    </div>
                    <div className=" d-flex justify-content-center align-items-center">
                        <Link className={`${location.pathname === '/' ? '' : "hidden" && location.pathname === '/contact' ? '' : "hidden"}`} to='/Login'>
                            <button type="button" className=" nav-btn mx-3 ">
                                Log In </button></Link>
                        <Link className={`${location.pathname === '/' ? '' : "hidden" && location.pathname === '/contact' ? '' : "hidden"}`} to='/Signup'><button type="button" className=" nav-btn " >Sign Up</button></Link>

                    </div>


                </div>
            </div>
        </nav>
    )
}


