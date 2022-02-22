import { Link } from "react-router-dom";
import Button from "./Button";

const ObjectCard = (props) => {
  const { image, address, price, rooms, bathrooms, area, text } = props;
  return (
    <div className="card">
      <img src={image} alt="Image" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title mb-2">{address}</h5>
        <h6 className="card-subtitle mb-2">Pris: {price}</h6>
        <h6 className="card-subtitle mb-2">Rooms: {rooms}</h6>
        <h6 className="card-subtitle mb-2">Bathrooms: {bathrooms}</h6>
        <h6 className="card-subtitle mb-2">Area: {area}</h6>
        <p className="card-text">{text}</p>
        {/* <Link to="/"> */}
        <Button className={"btn btn-primary"} type={"button"}>
          Las mer
        </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ObjectCard;
