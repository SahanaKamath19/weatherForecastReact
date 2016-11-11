import React, { Component } from 'react';
import temp from './temperature.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-header">
          <img src={temp} className="Header-logo" alt="logo" />
          <h2>Weather In {this.props.city}</h2>
        </div>
      </div>
    );
  }
}

export default Header;
