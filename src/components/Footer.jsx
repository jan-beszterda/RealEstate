import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="container-fluid py-3 my-4"
      style={{
        backgroundColor: "#D3D3D3",
        maxHeight: "100px",
        fontSize: "0.8rem",
        lineHeight: "1rem",
        fontWeight: "bold",
      }}
    >
      <div className="row">
        <ul className="nav justify-content-center align-items-center pb-2 mb-2">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-2"
              style={{
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Hem
            </Link>
          </li>
          <span style={{ color: "#000000" }}>&middot;</span>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-2"
              style={{
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Tjänster
            </Link>
          </li>
          <span style={{ color: "#000000" }}>&middot;</span>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-2"
              style={{
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Objekt till salu
            </Link>
          </li>
          <span style={{ color: "#000000" }}>&middot;</span>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-2"
              style={{
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Om oss
            </Link>
          </li>
          <span style={{ color: "#000000" }}>&middot;</span>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-2"
              style={{
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Blogg
            </Link>
          </li>
          <span style={{ color: "#000000" }}>&middot;</span>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-2"
              style={{
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Kontakta oss
            </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <p
          className="text-center"
          style={{
            color: "#000000",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          &copy; 2022 Real Estate AB
        </p>
      </div>
    </footer>
  );
};

export default Footer;
