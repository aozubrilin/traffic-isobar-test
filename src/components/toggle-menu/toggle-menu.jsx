import React from 'react';

const ToggleMenu = ({isMenuOpened, onClick}) => {
  return (
    <button className={`${isMenuOpened ? "toggle-menu toggle-menu--close" : "toggle-menu"}`} type="button" onClick={onClick}> 
      <span class="visually-hidden">Меню</span>
    </button>
  );
};

export default ToggleMenu;
