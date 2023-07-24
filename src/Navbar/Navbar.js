import React from "react";
import "./Navbar.css";
import dropdown from "../assets/dropdown.png";
import rightarrow from "../assets/rightarrow.png";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="left-nav">
          <img
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
            alt="logo-img"
          />
          <ul className="left-ul">
            <li>
              {" "}
              <span>Products</span>
              <img src={dropdown} alt="dropdown" />
            </li>
            <li>
              {" "}
              <span>Teams</span>
              <img src={dropdown} alt="dropdown" />
            </li>
            <li>
              {" "}
              <span>Platform</span>
              <img src={dropdown} alt="dropdown" />
            </li>
            <li>
              {" "}
              <span>Resources</span>
              <img src={dropdown} alt="dropdown" />
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <ul className="left-ul">
            <li>
              {" "}
              <span>Pricing</span>
            </li>
            <li>
              {" "}
              <span>Contact sales</span>
            </li>
            <li>
              {" "}
              <span>Log in</span>
            </li>
            <li>
              {" "}
              <button className="start-btn">
                <span>Get Started</span>
                <img src={rightarrow} alt="rightarrow" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
