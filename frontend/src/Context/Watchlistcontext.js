import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const WatchlistContext = createContext();

// Provider Component
export const WatchlistProvider = ({ children }) => {
  // const [watchlist, setWatchlist] = useState([]);
  const [watchlist, setWatchlist] = useState(()=>{
    const storedWatchlist = localStorage.getItem('watchlist');
    return storedWatchlist ? JSON.parse(storedWatchlist) : {}
  });

  //Main Code
  // Load watchlist from localStorage
  // useEffect(() => {
  //   const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  //   setWatchlist(storedWatchlist);
  // }, []);

  // Save watchlist to localStorage
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (coin) => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    setWatchlist((prevWatchlist) => [...prevWatchlist, coin]);
  };



  const removeFromWatchlist = (id) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter(coin => coin.id !== id));
  };


  const [userData, setUserData] = useState([])
  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/fetchuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });
      console.log(localStorage.getItem("token"))
      const responseData = await response.json();
      setUserData(responseData);
      // console.log(userData)
      console.log(userData.email)
    } catch (error) {
      console.error("Error adding Item:", error);
    }
  };

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <WatchlistContext.Provider value={{ watchlist, userData, addToWatchlist,  removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

