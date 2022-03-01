import { useNavigate } from "react-router-dom";
import Button from "./Button";

const ObjectCard = ({ object }) => {
  const { id, image, address, price, rooms, bathrooms, area, text } = object;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/forsale/${id}`);
  };

  return (
    <div className="card h-100 mx-auto">
      <img src={image} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title mb-2">{address}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Pris: {price}</li>
        <li className="list-group-item">Rum: {rooms}</li>
        <li className="list-group-item">Badrum: {bathrooms}</li>
        <li className="list-group-item">Boarea: {area}</li>
      </ul>
      <div className="card-body">
        {/*<h6 className="card-subtitle mb-2">Pris: {price}</h6>
        <h6 className="card-subtitle mb-2">Rooms: {rooms}</h6>
        <h6 className="card-subtitle mb-2">Bathrooms: {bathrooms}</h6>
  <h6 className="card-subtitle mb-2">Area: {area}</h6>*/}
        <p className="card-text">{text[0]}</p>
        <Button className={"btn btn-primary"} type={"button"} onClick={onClick}>
          Läs mer
        </Button>
      </div>
    </div>
  );
};

export default ObjectCard;
