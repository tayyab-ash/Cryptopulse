import React from 'react'
import './Diff.css'

export default function Diff(props) {
    return (
        <div className="diff">
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={{ backgroundColor: props.theme === 'light' ? 'white' : 'rgb(27, 27, 27)' }}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.theme === 'light' ? 'rgba(201, 198, 198, 0.507)' : '', color: props.theme === 'light' ? 'black' : '' }}>
                            Pricing
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body " style={{ color: props.theme === 'light' ? 'black' : 'white', fontSize: '15px' }}>
                            <span className='fs-6' style={{ color: '#ffc011' }}> if you want to track the real time value ?<br /> First Register For Free to get access to all features</span>  <br />
                            Cryptocurrency price tracking is the monitoring and analysis of the value of digital assets in real-time. It involves using specialized platforms or apps to keep users informed about the latest price movements, market trends, and other relevant data for various cryptocurrencies such as Bitcoin, Ethereum, and others. Investors and enthusiasts use these tools to make informed decisions, identify trading opportunities, and manage their portfolios effectively. Price tracking platforms typically provide features like historical price charts, market cap rankings, trading volume, and news updates, offering users a comprehensive view of the dynamic and volatile nature of the cryptocurrency market.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.theme === 'light' ? 'white' : 'rgb(27, 27, 27)' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.theme === 'light' ? 'rgba(201, 198, 198, 0.507)' : '', color: props.theme === 'light' ? 'black' : '' }}>
                            Terms of Services
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white', fontSize: '15px' }}>
                            <span className='fs-6'>Using CryptoPulse.info and its services constitutes your agreement to abide by these Terms of Service. By accessing the website or utilizing the services, you acknowledge and accept all specified conditions and obligations outlined herein.</span> <br />
                            <span style={{ color: '#ffc011' }}> &rarr; User Responsibilities:</span>
                            <p>Clearly define user obligations, including accurate information provision and adherence to legal requirements.</p>
                            <span style={{ color: '#ffc011' }}> &rarr;Service Description:</span>
                            <p>Detail the features and functionalities provided by Cryptopulse for tracking cryptocurrency prices and portfolios.</p>
                            <span style={{ color: '#ffc011' }}> &rarr; Data Accuracy:</span>
                            <p>Clarify that while efforts are made to provide accurate information, users should verify critical data independently.</p>
                            <span style={{ color: '#ffc011' }}> &rarr; Intellectual Property:</span>
                            <p>Outline the ownership of content and intellectual property rights related to Cryptopulse.</p>
                            <span style={{ color: '#ffc011' }}> &rarr;Account Security:</span>
                            <p>Emphasize the importance of user account security and the responsibility to maintain confidentiality.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="accordion-item" style={{ backgroundColor: props.theme === 'light' ? 'white' : 'rgb(27, 27, 27)' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.theme === 'light' ? 'rgba(201, 198, 198, 0.507)' : '', color: props.theme === 'light' ? 'black' : '' }}>
                            Contact & FAQ
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div> */}
                <div className="accordion-item" style={{ backgroundColor: props.theme === 'light' ? 'white' : 'rgb(27, 27, 27)' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ backgroundColor: props.theme === 'light' ? 'rgba(201, 198, 198, 0.507)' : '', color: props.theme === 'light' ? 'black' : '' }}>
                            Privacy Policy
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                            <span>At Cryptopulse, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website. By using Cryptopulse, you agree to the terms of this Privacy Policy.</span> <br />
                            <span style={{ color: '#ffc011' }}> &rarr; Personal Information:</span> <p> We use Information that identifies you, such as your name, email address, or other contact details, if you choose to provide it.</p>
                            <span style={{ color: '#ffc011' }}>&rarr; How We Use Your Information</span>
                            <p>1-Providing and maintaining our services. <br />
                                2-Personalizing your experience on our website. <br />
                                3-Analyzing usage patterns to improve our services. <br />
                                4-Communicating with you about updates, promotions, or other relevant information.
                                Ensuring the security and integrity of our website</p>
                            <span style={{ color: '#ffc011' }}>&rarr; Data Sharing and Disclosure</span>
                            <p>We do not sell or rent your personal information to third parties. However, we may share your information with: <br />

                                * Service Providers: Third-party companies that help us provide and maintain our services, such as web hosting and analytics. <br />
                                * Legal Requirements: If required by law, we may disclose your information to comply with legal obligations, protect our rights, or ensure public safety.</p>
                            <span style={{ color: '#ffc011' }}>&rarr; Data Security</span>
                            <p>We take reasonable measures to protect your information from unauthorized access, disclosure, or loss. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
