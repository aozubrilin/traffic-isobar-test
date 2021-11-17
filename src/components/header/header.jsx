import React from 'react';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo />
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
