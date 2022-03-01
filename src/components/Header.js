
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex-container">
      <div class="text-center">
       <Link className="nav-link" to="/">
         <div className="header-image">
           <img className="header-image" src="images/logga-notagline.png" alt="logo"/>
         </div>
        </Link>
      </div>
        <nav className="navbar navbar-expand-sm justify-content-center">     
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
              Hem</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
              Tjänster</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/forsale">
              Objekt till salu</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              Om oss</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
              Blogg</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
              Kontakta oss</Link></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;