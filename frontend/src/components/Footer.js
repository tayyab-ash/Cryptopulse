import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div className='footer-container' style={{ backgroundColor: props.theme === 'light' ? 'rgba(201, 198, 198, 0.507)' : '' }}>
            <div className="footer-data">
                <ul>
                    <li><Link to='/' style={{ color: props.theme === 'light' ? 'rgb(27, 27, 27)' : '' }} > Main page </Link></li>
                    <li><Link to='/Diff' style={{ color: props.theme === 'light' ? 'rgb(27, 27, 27)' : '' }} > Pricing </Link></li>
                   <li> <Link to='/Diff' style={{ color: props.theme === 'light' ? 'rgb(27, 27, 27)' : '' }} > Terms of Services</Link></li>
                   <li> <Link to='/contact' style={{ color: props.theme === 'light' ? 'rgb(27, 27, 27)' : '' }} > Contact & FAQ </Link></li>
                    <li><Link to='/Diff' style={{ color: props.theme === 'light' ? 'rgb(27, 27, 27)' : '' }} > Privacy Policy </Link></li>

                </ul>
                <div className="footer-end">
                    <span style={{ color: props.theme === 'light' ? 'rgba(29, 29, 29, 0.705)' : '' }}>-------------------------------------------------------------</span>
                    <span style={{ color: props.theme === 'light' ? 'rgba(24, 24, 24, 0.705)' : '' }}>Copyright © 2024 CryptoPulse</span>

                </div>
            </div>

        </div>
    )
}
