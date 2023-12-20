const Navigation = ({ isOpened }: { isOpened: boolean }) => (
  <nav aria-expanded={isOpened} className={`header__navigation ${isOpened ? 'opened' : ''}`}>
    <ul aria-label="Primary" role="navigation" className="header__navigation-list" id="header__navigation">
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Product</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Community</a></li>
    </ul>
  </nav>
);

export default Navigation;
