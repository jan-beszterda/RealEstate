import Button from "./Button";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contacts, setContacts] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && phone && email && message) {
      setContacts([
        ...contacts,
        {
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          email: email,
          message: message,
          id: uuidv4(),
        },
      ]);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("Contact", JSON.stringify([...contacts]));
  }, [contacts]);

  return (
    <div className="container-sm contact-form py-2">
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
          <label className="form-label px-0" htmlFor="message">
            Frågor
          </label>
        </div>
        <div className="row mb-4 mx-2">
          <textarea
            className="form-control"
            name="message"
            type="text"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button className="btn btn-primary ms-2" type="submit">
          Skicka
        </Button>
      </form>
      {success && <div>Thank you for your message</div>}
    </div>
  );
};

export default ContactForm;
