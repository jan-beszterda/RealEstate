import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid mt-4 p-2">
      <div className="row">
        <ul className="nav justify-content-center align-items-center pb-2 mb-2">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2">
              Hem
            </Link>
          </li>
          <span>&middot;</span>
          <li className="nav-item">
            <Link to="/services" className="nav-link px-2">
              Tjänster
            </Link>
          </li>
          <span>&middot;</span>
          <li className="nav-item">
            <Link to="/forsale" className="nav-link px-2">
              Objekt till salu
            </Link>
          </li>
          <span>&middot;</span>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2">
              Om oss
            </Link>
          </li>
          <span>&middot;</span>
          <li className="nav-item">
            <Link to="/blog" className="nav-link px-2">
              Blogg
            </Link>
          </li>
          <span>&middot;</span>
          <li className="nav-item">
            <Link to="/contact" className="nav-link px-2">
              Kontakta oss
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <p className="text-center">&copy; 2022 Real Estate AB</p>
      </div>
    </footer>
  );
};

export default Footer;
