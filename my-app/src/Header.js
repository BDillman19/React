import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <div className="headerBackground">
        <div className="headerImage" >
        <img src='./logo.png' alt="logo" href="index.html"/>
        </div>
        <div>
          <h1>Money Tracker</h1>
        </div>
      </div>
    )
}

export default Header;