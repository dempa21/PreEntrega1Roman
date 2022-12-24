import "./navbar.css";


import logo from "../../assets/img/logo.jpg";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
    {/* <nav> */}
      <ul className="nav-menu">
        <h2>
          <li>
          <img className="logo" src={logo}></img>
          </li>
        </h2>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Remeras
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Buzos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Zapatillas
          </a>
        </li>

        {/* <CartWidget/> */}
        <span>0 🛒</span>
        {/* FontAwsome */}
      </ul>
    {/* </nav> */}
    </nav>
  );
}

export default NavBar;
