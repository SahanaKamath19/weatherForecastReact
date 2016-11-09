import React, { Component } from 'react';
import logo from './temperature.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h2>Weather App</h2>
        </div>
      </div>
    );
  }
}

export default Header;
