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
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };

  useEffect(() => {
    localStorage.setItem("Contact", JSON.stringify([...contacts]));
  }, [contacts]);

  return (
    <>
      {!success ? (
        <form className="contact-form p-3" onSubmit={handleSubmit}>
          <label className="form-label mb-1" htmlFor="firstName">
            Förnamn
          </label>
          <input
            className="form-control mb-4"
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="form-label mb-1" htmlFor="lastName">
            Efternamn
          </label>
          <input
            className="form-control mb-4"
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="form-label mb-1" htmlFor="phone">
            Telefon
          </label>
          <input
            className="form-control mb-4"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="form-label mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="form-control mb-4"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label mb-1" htmlFor="message">
            Frågor
          </label>
          <textarea
            className="form-control mb-4"
            name="message"
            type="text"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="btn btn-primary" type="submit">
            Skicka
          </Button>
        </form>
      ) : (
        <span className="text-center">Thank you for your message</span>
      )}
    </>
  );
};

export default ContactForm;
