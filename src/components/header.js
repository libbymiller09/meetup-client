import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <img src="" alt="Logo" className="header__logo" />
        <ul className="header__list">
          <li className="header__item"><a href="/">Home</a></li>
          <li className="header__item"><a href="/map">Map</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;