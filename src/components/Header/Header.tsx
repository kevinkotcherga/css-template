import { useState } from 'react';
import logo from '../../assets/logo.svg';
import iconClose from '../../assets/icon-close.svg';
import iconHamburger from '../../assets/icon-hamburger.svg';

const Header = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false);

  const toggleNavigation = () => {
    setIsNavigationOpened(!isNavigationOpened);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a href='#'><img src={logo} alt="Manage" /></a>
          <button className='header__mobile-toggle' aria-controls="primary-navigation" onClick={toggleNavigation}>
            <img className='header__icon-hamburger' src={iconHamburger} alt="" aria-hidden="true" />
            <img className='header__icon-close' src={iconClose} alt="" aria-hidden="true" />
            <span className='visually-hidden'>Menu</span>
          </button>
          <nav className={`header__navigation ${isNavigationOpened ? 'opened' : ''}`}>
            <ul aria-label="Primary" role='navigation' className='header__navigation-list' id="header__navigation">
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </nav>
          <button className="button" style={{ display: "none" }}>Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
