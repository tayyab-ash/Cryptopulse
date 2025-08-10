import React, { useContext } from "react";
import { WatchlistContext } from "../Context/Watchlistcontext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { userData, clearUserData } = useContext(WatchlistContext);
  const navigate = useNavigate();

  const removeAuthToken = () => {
    localStorage.removeItem("token");
    if (clearUserData) {
      clearUserData();
    }
    navigate("/");
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Are you want to Logout
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {userData && userData.email ? userData.email : "User"}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={removeAuthToken}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
