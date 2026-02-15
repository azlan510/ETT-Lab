import { Link,NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent my-navbar ">
        <div className="container-lg">
          <Link className="navbar-brand custom-brand" to="/">
            <span className="brand-name">Portfolio</span>
            <span className="separator"> | </span>
            <span className="tag-wrapper">
              <span className="tag">&lt;</span>
              <span className="name">Ankush</span>
              <span className="slash"> / </span>
              <span className="surname">Verma</span>
              <span className="tag">&gt;</span>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive?"active":""}`}  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive?"active":""}`} to="/about">
                  About
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className={({isActive})=>`nav-link ${isActive?"active":""}`}  to="/resume">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({isActive})=>`nav-link ${isActive?"active":""}`} to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className={({isActive})=>`nav-link ${isActive?"active":""}`} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
