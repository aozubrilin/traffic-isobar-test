import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {Object.keys(AppRoute).map((item, i) => (
            <li key={AppRoute[item].title + i} className="main-nav__item">
            <NavLink className="main-nav__link" to={AppRoute[item].url}>
              {AppRoute[item].title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
