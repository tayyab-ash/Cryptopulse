import React, { createContext, useState, useEffect } from "react";

// Create Context
export const WatchlistContext = createContext();

// Provider Component
export const WatchlistProvider = ({ children }) => {
  // const [watchlist, setWatchlist] = useState([]);
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });

  //Main Code
  // Load watchlist from localStorage
  // useEffect(() => {
  //   const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  //   setWatchlist(storedWatchlist);
  // }, []);

  // Save watchlist to localStorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (coin) => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setWatchlist((prevWatchlist) => [...prevWatchlist, coin]);
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((coin) => coin.id !== id)
    );
  };

  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUserData({});
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        setUserData(responseData);
      } else {
        // If token is invalid, clear it
        localStorage.removeItem("token");
        setUserData({});
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUserData({});
    } finally {
      setIsLoading(false);
    }
  };

  const clearUserData = () => {
    setUserData({});
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        userData,
        isLoading,
        addToWatchlist,
        removeFromWatchlist,
        clearUserData,
        fetchUser,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
