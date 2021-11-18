import React from 'react';
import PropTypes from 'prop-types';

const ToggleMenu = ({isMenuOpened, onClick}) => {
  return (
    <button className={`${isMenuOpened ? "toggle-menu toggle-menu--close" : "toggle-menu"}`} type="button" onClick={onClick}> 
      <span className="visually-hidden">Меню</span>
    </button>
  );
};

ToggleMenu.propTypes = {
  isMenuOpened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleMenu;
