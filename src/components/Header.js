import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
      <img src="" alt="" /> 
      </div>
      <nav>
        <ul>
        <li><Link className="" to="/">
            Hem</Link></li>
        <li><Link className="" to="/Services">
            Tjänster</Link></li>
        <li><Link className="" to="/ObjectForSale">
            Objekt till salu</Link></li>
        <li><Link className="" to="/About">
            Om oss</Link></li>
        <li><Link className="" to="/Blog">
            Blogg</Link></li>
        <li><Link className="" to="/ContactUs">
            Kontakta oss</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;