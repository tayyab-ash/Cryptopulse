import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Cryptopage from './components/Cryptopage';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Diff from './components/Diff';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Coinpage from './components/Coinpage';
import Contact from './components/Contact';
import News from './components/News';
import Chatbot from './components/Chatbot';
import { WatchlistProvider } from './Context/Watchlistcontext';
import WatchlistPage from './components/WatchlistPage';
import Videos from './components/Learningdata/Videos';
import Discription from './components/Learningdata/Discription';
import Articles from './components/Articles';
import Logout from './components/Logout';
import Home2 from './components/Home2';

function App(props) {
  const [theme, settheme] = useState('dark');
  const [upbar, setupbar] = useState('watchlist-close');
  useEffect(() => {
    document.body.style.backgroundColor = "rgb(15, 15, 15)";
  }, []);

  let showbar =()=>{
    if(upbar==='watchlist-close')
      setupbar('watchlist-open')
  }
  let closebar =()=>{
    if(upbar==='watchlist-open')
      setupbar('watchlist-close')
    
  }

  const changetheme = () => {
    if (theme === 'dark') {
      settheme('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      settheme('dark');
      document.body.style.backgroundColor = 'rgb(15, 15, 15)';
    }
  };

  return (
    <>
      <div className="parent-container">
        <Router>
          <Routes>
            <Route
              path="/*"
              element={
                <React.Fragment>
                  <Navbar theme={theme} changetheme={changetheme} showbar={showbar} />
                  {/* <Logout theme={theme} changetheme={changetheme} /> */}
                  <div>
                    <WatchlistProvider>
                    <Logout theme={theme} changetheme={changetheme} />
                      <Routes>
                        <Route
                          path='/'
                          element={<Home theme={theme} changetheme={changetheme} />}
                        />
                        <Route
                          path="/Diff"
                          element={<Diff theme={theme} changetheme={changetheme} />}
                        />
                        <Route
                          path="/contact"
                          element={<Contact theme={theme} changetheme={changetheme} />}
                        />
                      </Routes>
                      <Routes>
                        <Route
                          path="/crypto"
                          element={<Cryptopage theme={theme} changetheme={changetheme} />}
                        />
                        <Route
                          path="/home2"
                          element={<Home2 theme={theme} changetheme={changetheme} />}
                        />
                        
                      
                        <Route
                          path="/coinpage/:coinid"
                          element={<Coinpage theme={theme} changetheme={changetheme} />}
                        />
                        <Route path="/cryptonews" element={<News theme={theme} changetheme={changetheme} />} />
                        <Route path="/videos" element={<Videos theme={theme} changetheme={changetheme} />} />
                        <Route path="/discription" element={<Discription theme={theme} changetheme={changetheme} />} />
                        <Route path="/articles" element={<Articles theme={theme} changetheme={changetheme} />} />
                        
                        
                        
                        
                        
                      </Routes>
                      <div className={`${upbar}`}>
                        <WatchlistPage theme={theme} changetheme={changetheme} showbar={showbar} closebar={closebar}  />
                      </div>
                    </WatchlistProvider>
                  </div>
                  <div className="bot-position fixed-bottom">
                    <Chatbot theme={theme} changetheme={changetheme} />

                  </div>

                  <Footer theme={theme} changetheme={changetheme} />
                </React.Fragment>
              }
            />
            <Route path="/login" element={<Login theme={theme} changetheme={changetheme} />} />
            <Route path="/Signup" element={<Signup theme={theme} changetheme={changetheme} />} />
          </Routes>
        </Router>

      </div>

    </>
  );
}

export default App;
