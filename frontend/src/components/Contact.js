import React from 'react'
import faqimg from '../images/FAQs-cuate.png'
import contactimg from '../images/Contact us-amico.png';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact(props) {
    AOS.init({ duration: 1000 });
    return (
        <>
            <div className="maindivcontactpage">
                <h1 className='text-center' style={{ color: props.theme === 'dark' ? 'white' : '' }}>Contact Us</h1>
                <div className="divcontact">
                    <div className="contactform">
                        <h3 style={{ color: '#ffc011' }}>Get in Touch</h3>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label" style={{ color: props.theme === 'dark' ? 'white' : '' }}>Your Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" style={{ backgroundColor: '#cccaca' }} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput2" className="form-label" style={{ color: props.theme === 'dark' ? 'white' : '' }}>Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" style={{ backgroundColor: '#cccaca' }} />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label" style={{ color: props.theme === 'dark' ? 'white' : '' }}>Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ backgroundColor: '#cccaca' }}></textarea>
                        </div>
                        <button className='btn' style={{ backgroundColor: "#ffc011" }}>Submit</button>
                    </div>
                    <div className="contactheading" data-aos="fade-left">

                        <img src={contactimg} alt="" />
                        <div className="contactdata">
                            <span style={{ fontSize: '18px', color: props.theme === 'light' ? 'black' : 'white' }}><FontAwesomeIcon icon={faHeadset} className='fs-3' style={{ color: 'ffc011' }} />   040-7567456</span>
                            <span style={{ fontSize: '18px', color: props.theme === 'light' ? 'black' : 'white' }}><FontAwesomeIcon icon={faEnvelope} className='fs-3' style={{ color: 'ffc011' }} />  cryptopulse@gmail.com</span>
                        </div>
                        <div className="contactlinks">
                            <FontAwesomeIcon icon={faSquareFacebook} className='fs-3' style={{ color: 'ffc011' }} />
                            <FontAwesomeIcon icon={faSquareInstagram} className='fs-3' style={{ color: 'ffc011' }} />
                            <FontAwesomeIcon icon={faSquareXTwitter} className='fs-3' style={{ color: 'ffc011' }} />
                        </div>

                    </div>
                </div>
                <div className="mainaccordiondiv">
                    <h1 className='text-center' style={{paddingTop:'10px',color: props.theme === 'dark' ? 'white' : ''}}>FAQs</h1>
                    <div className='divaccordion'>
                        <div className="acimg" data-aos="fade-right">
                            <img src={faqimg} alt="" />
                        </div>
                        <div className="divac1" data-aos="fade-up">
                            <div className="accordion accordion-flush" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: '#ffc011' }}>
                                            What is Crypto Pulse?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                                            Crypto Pulse is a website that provides real-time tracking and analytics for a wide range of cryptocurrencies.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: '#ffc011' }}>
                                            Is Crypto Pulse free to use?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                                            Yes the Cryptopulse website is free to use use and easy to access all the functionalities
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: '#ffc011' }}>
                                            How do I track my favorite cryptocurrencies?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                                            To track specific cryptocurrencies, you can create a personalized watchlist by selecting your favorite coins.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ color: '#ffc011' }}>
                                            How often is the data updated on Crypto Pulse?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                                            The data on Crypto Pulse is updated in real-time, ensuring that you have the latest information on prices, market trends, and news.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{ color: '#ffc011' }}>
                                            Does Crypto Pulse offer educational content?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                                            Yes, Crypto Pulse provides a comprehensive learning section with articles, guides, and tutorials on cryptocurrencies, blockchain technology, and market trends.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            

        </>

    )
}
