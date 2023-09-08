const Navbar = () => {
  return (
    <nav className="Navbar">
      {/* LOGO  */}
      <div className="Navbar-logo">
        <img src="./assets/brand_logo.png" alt="Brand-logo" />
      </div>
      {/* Navigation  */}
      <div className="Navbar-Navigation-menu">
        <ul className="Navigation-list">
          <li>
            <a href="/">MENU</a>
          </li>
          <li>
            <a href="/">LOCATION</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </div>
      {/* lOGIN BUTTON  */}
      <div className="Navbar-button">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
