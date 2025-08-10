import React from 'react'
import currency from '../../images/currency.webp'
import trading from '../../images/crypto.original.png'
import './Discription.css'

export default function Discription(props) {
    return (
        <div className='disc-main' style={{ marginTop: '100px' }}>
            <h2 className='text-center' style={{ color: props.theme === 'dark' ? 'white' : '' }}> Crypto Discription</h2>
            <div className="disc-data">
                <div className="disc-theory">
                    <h3 style={{ color: '#ffc011' }}>What is Crypto Currency ?</h3>
                    <p style={{ color: props.theme === 'dark' ? 'white' : '' }}>Cryptocurrency is a type of digital or virtual currency that uses cryptography for security. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies operate on a technology called blockchain, which is a decentralized system spread across many computers that manage and record transactions. The decentralized nature of cryptocurrencies means they are not controlled by any single entity, which is one of their key appeals.</p>
                </div>
                <div className="disc-pic1">
                    <img src={currency} alt="" />
                </div>

            </div>
            <div className="disc-data2">
                <h2 className='text-center my-4' style={{ color: props.theme === 'dark' ? 'white' : '' }}> Key Features of Cryptocurrencies</h2>
                <p style={{ color: props.theme === 'dark' ? 'white' : '' }}> <span>1-Decentralization:</span> Cryptocurrencies operate on a decentralized network, usually through blockchain technology, which means they are not controlled by a single central authority.
                    <br />

                    <span> 2-Transparency:</span> Blockchain technology ensures that all transactions are transparent and can be viewed by anyone. This ledger of transactions is immutable and secure.
                    <br />

                    <span> 3-Security:</span> Cryptocurrencies use cryptographic techniques to secure transactions and control the creation of new units. This makes them resistant to fraud and hacking.
                    <br />

                    <span> 4-Anonymity and Pseudonymity:</span> While transactions are transparent, the identities of the users involved in the transactions can remain anonymous or pseudonymous.
                    <br />

                    <span> 5-Global Transactions:</span> Cryptocurrencies can be sent and received anywhere in the world, often with lower transaction fees and faster processing times compared to traditional banking systems.</p>
            </div>
            <h2 className='text-center my-4' style={{ color: props.theme === 'dark' ? 'white' : '' }}> History of Cryptocurrency</h2>
            <div className="disc-data3">

                <p style={{ color: props.theme === 'dark' ? 'white' : '' }}>The concept of digital currency dates back to the early 1980s with the creation of eCash, an anonymous cryptographic electronic money developed by David Chaum. However, the first decentralized cryptocurrency, Bitcoin, was introduced in 2008 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. The first Bitcoin transaction was recorded in January 2009.</p>
            </div>
            <div className="ket-points">
                <h4 style={{ color: props.theme === 'dark' ? 'white' : '', marginLeft: '58px' }}>Key Milestones in Cryptocurrency History:</h4>
                <p style={{ color: props.theme === 'dark' ? 'white' : '' }}><span>2008:</span> Publication of the Bitcoin whitepaper by Satoshi Nakamoto, outlining the concept and technical details of Bitcoin. <br />
                    <span>2009:</span> Launch of Bitcoin and mining of the first block, known as the Genesis Block.<br />
                    <span>2010:</span> The first known commercial transaction using Bitcoin took place, where a programmer paid 10,000 BTC for two pizzas. This day is celebrated as Bitcoin Pizza Day.<br />
                    <span>2011:</span> Emergence of alternative cryptocurrencies (altcoins), such as Litecoin and Namecoin.<br />
                    <span>2013:</span> Bitcoin's value reaches $1,000 for the first time, gaining significant media attention.<br />
                    <span>2015:</span> Launch of Ethereum, a blockchain platform that introduced smart contracts, expanding the potential applications of blockchain technology.<br />
                    <span>2017:</span> The cryptocurrency market experiences a massive boom, with Bitcoin reaching an all-time high of nearly $20,000.<br />
                    <span>2020-2021:</span> Surge in interest and investment in cryptocurrencies, driven by institutional investors and the rise of decentralized finance (DeFi) and non-fungible tokens (NFTs).</p>
            </div>
            <h2 className='text-center' style={{ color: props.theme === 'dark' ? 'white' : '' }}>Crypto Trading Discription</h2>
            <div className="dsic-data4">

                <div className="disc-pic2">
                    <img src={trading} alt="" />
                </div>
                <div className="disc-theory2">
                    <h3>What is Crypto Trading?</h3>
                    <p style={{ color: props.theme === 'dark' ? 'white' : '' }}>Crypto trading, or cryptocurrency trading, is the act of buying, selling, and exchanging cryptocurrencies with the aim of making a profit. This type of trading operates similarly to traditional stock trading but involves digital currencies like Bitcoin, Ethereum, and other altcoins instead of stocks and bonds.</p>
                </div>

            </div>
            <div className="disc-data5">
                <h4 style={{ color: props.theme === 'dark' ? 'white' : '' }}>Types of Crypto Trading:</h4>
                <p style={{ color: props.theme === 'dark' ? 'white' : '' }}><span>Spot Trading:</span> Buying and selling cryptocurrencies for immediate delivery. This is the most straightforward type of trading where traders buy an asset at the current market price and sell it at a future date when the price increases. <br />

                    <span>Margin Trading:</span> Borrowing funds to trade larger positions than what the trader's own capital would allow. This can amplify gains but also losses, making it a high-risk strategy. <br />

                    <span>Futures Trading:</span> Entering into contracts to buy or sell a cryptocurrency at a predetermined price at a future date. This allows traders to speculate on the future price movements of cryptocurrencies. <br />

                    <span>Day Trading:</span> Buying and selling cryptocurrencies within the same day to take advantage of short-term price movements. Day traders often use technical analysis and chart patterns to make trading decisions. <br />

                    <span>Swing Trading:</span> Holding cryptocurrencies for several days or weeks to capitalize on expected upward or downward market shifts. This type of trading lies between day trading and long-term investing. <br />

                    <span>Automated Trading:</span> Using algorithms and trading bots to execute trades automatically based on predefined criteria. This method can eliminate emotions from trading decisions and execute trades more efficiently.</p>
            </div>
            <div className="disc-data6">
                <h4 style={{ color: props.theme === 'dark' ? 'white' : '' }}>Tools and Platforms for Crypto Trading:</h4>
                <p style={{ color: props.theme === 'dark' ? 'white' : '' }}><span>Exchanges:</span> Online platforms where traders can buy, sell, and exchange cryptocurrencies. Examples include Binance, Coinbase, and Kraken. <br />
                    <span>Wallets:</span> Digital wallets used to store cryptocurrencies securely. They can be hardware-based (cold storage) or software-based (hot wallets). <br />
                    <span>Trading Bots:</span> Automated software programs that execute trades on behalf of traders based on programmed strategies. <br />
                    <span>Technical Analysis Tools:</span> Tools that help traders analyze price charts and market trends to make informed trading decisions.</p>
            </div>



        </div>
    )
}
