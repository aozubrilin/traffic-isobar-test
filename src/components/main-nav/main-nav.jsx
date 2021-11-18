import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';

const MainNav = ({isMenuOpened, onLinkClick}) => {
  return (
    <nav className={`${isMenuOpened ? "main-nav" : "main-nav main-nav--close"}`}>
      <ul className="main-nav__list">
        {Object.keys(AppRoute).map((item, i) => (
            <li key={AppRoute[item].title + i} className="main-nav__item">
            <NavLink className="main-nav__link" to={AppRoute[item].url} onClick={onLinkClick}>
              {AppRoute[item].title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

MainNav.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default MainNav;
