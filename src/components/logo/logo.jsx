import React from 'react';
import logo from '../../img/logo.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="logo__img"
        src={logo}
        alt="Логотип сайта Traffic Isobar"
        width="200"
        height="31"
      />
    </div>
  );
};

export default Logo;
