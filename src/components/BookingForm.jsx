import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && date && phone && email) {
      setBookings([
        ...bookings,
        {
          firstName: firstName,
          lastName: lastName,
          date: date,
          phone: phone,
          email: email,
          id: uuidv4(),
        },
      ]);
      setFirstName("");
      setLastName("");
      setDate("");
      setPhone("");
      setEmail("");
      setSuccess(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("Booking", JSON.stringify([...bookings]));
  }, [bookings]);

  return (
    <div className="container-sm booking-form">
        <h2 className="text-center">Boka vising</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-1 mx-2">
          <label className="form-label px-0" htmlFor="firstName">
            Förnamn
          </label>
        </div>
        <div className="row mb-4 mx-2">
          <input
            className="form-control"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="row mb-1 mx-2">
          <label className="form-label px-0" htmlFor="lastName">
            Efternamn
          </label>
        </div>
        <div className="row mb-4 mx-2">
          <input
            className="form-control"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="row mb-1 mx-2">
          <label className="form-label px-0" htmlFor="date">
            Datum
          </label>
        </div>
        <div className="row mb-4 mx-2">
          <input
            className="form-control"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="row mb-1 mx-2">
          <label className="form-label px-0" htmlFor="email">
            Email
          </label>
        </div>
        <div className="row mb-4 mx-2">
          <input
            className="form-control"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row mb-1 mx-2">
          <label className="form-label px-0" htmlFor="phone">
            Telefon
          </label>
        </div>
        <div className="row mb-4 mx-2">
          <input
            className="form-control"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <Button className="btn btn-primary mb-4 ms-2" type="submit">
          Boka
        </Button>
      </form>
      {success && <div>Vi har tagit emot din bokning!</div>}
    </div>
  );
};

export default BookingForm;
