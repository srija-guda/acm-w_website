import React, { useState } from "react";
import "./Navbar.css";
import logo from "./website-logo.svg";

const Navbar = () => {
  // Define state to track sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  // Toggle function for sidebar visibility
  const displaySidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="navbar-right">
        <i className="fa-solid fa-bars" onClick={displaySidebar}></i>
      </div>

      {isSidebarVisible && (
        <div className="sidebar">
          <button className="close-btn" onClick={displaySidebar}>
            X
          </button>
          <ul className="sidebar-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Timeline</li>
            <li>Projects</li>
            <li>How to Join Us</li>
            <li>Social Media</li>
          </ul>
          <div class="info">
            <p>
              BITS Pilani Hyderabad Campus,
              <br />
              Secunderabad, Telangana,
              <br />
              500078
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
