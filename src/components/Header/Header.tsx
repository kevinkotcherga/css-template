import { useState } from 'react';
import logo from '../../assets/logo.svg';
import iconClose from '../../assets/icon-close.svg';
import iconHamburger from '../../assets/icon-hamburger.svg';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpened(!isNavigationOpened);
  };

  return (
    <header className={`header ${isNavigationOpened ? 'opened' : ''}`}>
      <div className="container">
        <div className="header__wrapper">
          <a href='#'><img src={logo} alt="Manage" /></a>
          <button className='header__mobile-toggle' aria-expanded={isNavigationOpened} aria-controls="header__navigation" onClick={toggleNavigation}>
            <img className='header__icon-hamburger' src={iconHamburger} alt="" aria-hidden="true" />
            <img className='header__icon-close' src={iconClose} alt="" aria-hidden="true" />
            <span className='visually-hidden'>Menu</span>
          </button>
          <Navigation isOpened={isNavigationOpened} />
          <button className="button | display-small-none display-medium-inline-flex" >Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
