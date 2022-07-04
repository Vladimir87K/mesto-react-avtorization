import React from 'react';
import logo from '../image/logo.svg';

const Header = (props) => {
  return (
    <header className="header">
      <a href="#" className="header__link">
        <img src={logo} alt="логотип Место" className="header__logo" />
      </a>
      <p onClick={props.onClick} className='header__paragraph'>{props.user ? "Вход" : "Регистрация"}</p>
    </header>

  );
}

export default Header;