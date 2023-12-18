import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href='#'><img src={logo} alt="Manage" /></a>
        <nav className='header__nav'>
          <ul aria-label="Primary" role='list' className='header__nav-list'>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </nav>
        <button className="button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
