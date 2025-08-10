import React, { useState } from 'react';
import './Articles.css';
import pdf from '../Articlespdf/pdf-1.pdf';
import pdf2 from '../Articlespdf/pdf-2.pdf';
import pdf3 from '../Articlespdf/pdf-3.pdf';
import pdf4 from '../Articlespdf/pdf-4.pdf';
import pdf5 from '../Articlespdf/pdf-5.pdf';

export default function Articles(props) {
    const [showPdf, setShowPdf] = useState([false, false, false, false, false]);

    const handleReadClick = (index) => {
        const newShowPdf = showPdf.map((value, i) => (i === index ? !value : value));
        setShowPdf(newShowPdf);
    };

    return (
        <div className="articels-main" style={{ marginTop: '100px' }}>
            <div >
                <div className="child-article" >
                    <div className="card" style={{color:props.theme==='dark'?'white':'',backgroundColor:props.theme==='dark'?'rgb(34, 34, 34)':''}}>
                        <div className="card-header" style={{backgroundColor:props.theme==='dark'?'rgb(60, 60, 60)':''}}>
                            Crypto Article
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Cryptocurrency trading, A comprehensive survey</h5>
                            <p className="card-text">Review | Open access | Published: 07 February 2022 | Volume 8, article number 13, (2022)</p>
                            <button onClick={() => handleReadClick(0)} className="btn">
                                {showPdf[0] ? 'Hide' : 'Read'}
                            </button>
                            {showPdf[0] && (
                                <embed src={pdf} type="application/pdf" width="100%" height="600px" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="child-article">
                <div className="card" style={{color:props.theme==='dark'?'white':'',backgroundColor:props.theme==='dark'?'rgb(34, 34, 34)':''}}>
                    <div className="card-header" style={{backgroundColor:props.theme==='dark'?'rgb(60, 60, 60)':''}}>
                        Crypto Article
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">The psychology of cryptocurrency trading Risk
                            and protective factors</h5>
                        <p className="card-text">Received: March 15, 2021 • Revised manuscript received: May 17, 2021 • Accepted: May 22, 2021
                            Published online: June 19, 2021</p>
                        <button onClick={() => handleReadClick(1)} className="btn">
                            {showPdf[1] ? 'Hide' : 'Read'}
                        </button>
                        {showPdf[1] && (
                            <embed src={pdf2} type="application/pdf" width="100%" height="600px" />
                        )}
                    </div>
                </div>
            </div>


            <div className="child-article">
                <div className="card" style={{color:props.theme==='dark'?'white':'',backgroundColor:props.theme==='dark'?'rgb(34, 34, 34)':''}}>
                    <div className="card-header" style={{backgroundColor:props.theme==='dark'?'rgb(60, 60, 60)':''}}>
                        Crypto Article
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Cryptocurrency Trading Using Machine Learning</h5>
                        <p className="card-text">Received: 26 June 2020; Accepted: 31 July 2020; Published: 10 August 2020</p>
                        <button onClick={() => handleReadClick(2)} className="btn">
                            {showPdf[2] ? 'Hide' : 'Read'}
                        </button>
                        {showPdf[2] && (
                            <embed src={pdf3} type="application/pdf" width="100%" height="600px" />
                        )}
                    </div>
                </div>
            </div>


            <div className="child-article">
                <div className="card" style={{color:props.theme==='dark'?'white':'',backgroundColor:props.theme==='dark'?'rgb(34, 34, 34)':''}}>
                    <div className="card-header" style={{backgroundColor:props.theme==='dark'?'rgb(60, 60, 60)':''}}>
                        Crypto Article
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">CRYPTOCURRENCY PRICE CLASSIFICATION THROUGH DEEP LEARNING</h5>
                        <p className="card-text">Review | Open access | Published:February 18, 2021</p>
                        <button onClick={() => handleReadClick(3)} className="btn">
                            {showPdf[3] ? 'Hide' : 'Read'}
                        </button>
                        {showPdf[3] && (
                            <embed src={pdf4} type="application/pdf" width="100%" height="600px" />
                        )}
                    </div>
                </div>
            </div>


            <div className="child-article">
                <div className="card" style={{color:props.theme==='dark'?'white':'',backgroundColor:props.theme==='dark'?'rgb(34, 34, 34)':''}}>
                    <div className="card-header" style={{backgroundColor:props.theme==='dark'?'rgb(60, 60, 60)':''}}>
                        Crypto Article
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Forecasting and Trading of the Stable
                            Cryptocurrencies</h5>
                        <p className="card-text">Received 1 September 2023, accepted 16 October 2023, date of publication 25 October 2023,
                            date of current version 6 November 2023.</p>
                        <button onClick={() => handleReadClick(4)} className="btn">
                            {showPdf[4] ? 'Hide' : 'Read'}
                        </button>
                        {showPdf[4] && (
                            <embed src={pdf5} type="application/pdf" width="100%" height="600px" />
                        )}
                    </div>
                </div>
            </div>

            </div>
    );
}
