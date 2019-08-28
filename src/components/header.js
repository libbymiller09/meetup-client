import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';

class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" className="nav-logo" /></Link>
        </div>
        <div className="list">
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/map" className="nav-link">Map</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;