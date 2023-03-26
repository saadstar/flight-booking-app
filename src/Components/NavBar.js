import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <span className="logo">Saad Bokking</span>
        </Link>
        <div className="navbar-items">
          <Link to="/signup">
            <button className="navbar-button">Register</button>
          </Link>
          <Link to="/login">
            <button className="navbar-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
