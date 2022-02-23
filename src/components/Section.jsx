import { Link } from "react-router-dom";

const Section = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default Section;