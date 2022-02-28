import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

import BookingForm from "./BookingForm";
import Button from "./Button";

const ObjectPage = ({ objects }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [object, setObject] = useState({});
  const [text, setText] = useState([]);
  const [booking, setBooking] = useState({
    firstName: "",
    lastName: "",
    date: "",
    phone: "",
    email: "",
  });
  const [bookings, setBookings] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleFieldChange = (fieldName, fieldValue) => {
    setBooking({ ...booking, [fieldName]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      booking.firstName &&
      booking.lastName &&
      booking.date &&
      booking.phone &&
      booking.email
    ) {
      const newBooking = { ...booking, id: uuidv4(), objectId: object.id };
      setBookings([...bookings, newBooking]);
      setBooking({
        firstName: "",
        lastName: "",
        date: "",
        phone: "",
        email: "",
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }
  };

  useEffect(() => {
    localStorage.setItem("Bookings", JSON.stringify([...bookings]));
  }, [bookings]);

  useEffect(() => {
    if (objects.length === 0) {
      const currentObject = JSON.parse(localStorage.getItem("Current Object"));
      setObject(currentObject);
      setText(currentObject.text);
    } else {
      const currentObject = objects.filter(
        (object) => object.id === params.id
      )[0];
      localStorage.setItem("Current Object", JSON.stringify(currentObject));
      setObject(currentObject);
      setText(currentObject.text);
    }
  }, []);

  const onClick = () => {
    navigate("/forsale");
  };

  return (
    <div className="container-sm">
      <div className="row row-cols-1 row-cols-lg-3">
        <div className="col-lg-1">
          <Button className={"btn-icon"} type={"button"} onClick={onClick}>
            <FontAwesomeIcon icon={faRotateLeft} className="fa-2x" />
            <div>Tillbaka</div>
          </Button>
        </div>
        <div className="col-lg-6 mb-2">
          <img src={object.image} alt="apartment" />
          <div>
            <h4>{object.address}</h4>
            <h5>Pris: {object.price}</h5>
            <h5>Rooms: {object.rooms}</h5>
            <h5>Bathrooms: {object.bathrooms}</h5>
            <h5>Area: {object.area}</h5>
            {text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="col-lg-5">
          <BookingForm
            data={booking}
            onChange={handleFieldChange}
            submit={handleSubmit}
            success={success}
          />
        </div>
      </div>
    </div>
  );
};

export default ObjectPage;
