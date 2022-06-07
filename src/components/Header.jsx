import React from 'react';
import logo from '../image/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__link">
        <img src={logo} alt="логотип Место" className="header__logo" />
      </a>
    </header>

  );
}

export default Header;