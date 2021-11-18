import React, {useState, useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';
import ToggleMenu from '../toggle-menu/toggle-menu';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const handleToggleClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleMenuClose = () => {
    setIsMenuOpened(false);
  };

  useEffect(() => {
    if (!isMobile) {
      handleMenuClose();
    }
  }, [isMobile]);

  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__left">
          <Logo />
          <ToggleMenu isMenuOpened={isMenuOpened} onClick={handleToggleClick} />
        </div>
        <MainNav isMenuOpened={isMenuOpened} onLinkClick={handleMenuClose} />
      </div>
    </header>
  );
};

export default Header;
