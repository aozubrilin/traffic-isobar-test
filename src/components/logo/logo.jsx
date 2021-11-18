import React from 'react';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import logo from '../../img/logo.svg';
import {AppRoute} from '../../const';

const Logo = () => {
  const { pathname } = useLocation();
  const isMainPage = AppRoute.MAIN.url === pathname;

  return isMainPage ? (
    <div className="logo">
      <img
        className="logo__img"
        src={logo}
        alt="Логотип сайта Traffic Isobar"
        width="200"
        height="31"
      />
    </div>
  ) : (
    <div className="logo">
      <Link to={AppRoute.MAIN.url} className="logo__link">
        <img
          className="logo__img"
          src={logo}
          alt="Логотип сайта Traffic Isobar"
          width="200"
          height="31"
        />
      </Link>
    </div>
  );
};

export default Logo;
