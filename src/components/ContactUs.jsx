import Section from "./Section";
import ContactForm from "./ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ContactUs = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [contacts, setContacts] = useState([]);

  const [success, setSuccess] = useState(false);

  const handleFieldChange = (fieldName, fieldValue) => {
    setContact({ ...contact, [fieldName]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contact.firstName &&
      contact.lastName &&
      contact.phone &&
      contact.email &&
      contact.message
    ) {
      const newContact = { ...contact, id: uuidv4() };
      setContacts([...contacts, newContact]);
      setContact({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify([...contacts]));
  }, [contacts]);

  return (
    <div className="container-sm">
      {success && (
        <div className="overlay">
          <span className="text-center">Tack för ditt meddelande!</span>
        </div>
      )}
      <div className="row mb-4">
        <h2 className="text-center">Kontakta oss</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col align-self-center">
          <div className="row row-cols-1 row-cols-md-3 justify-content-center align-content-center">
            <Section className={"col d-flex flex-column"}>
              <FontAwesomeIcon icon={faMapLocationDot} className="fa-3x mb-3" />
              <p className="text-center">Real Estate AB Huvudkontor</p>
              <p className="text-center">Kungsholmsgatan 31, 104 20 Göteborg</p>
            </Section>
            <Section className={"col d-flex flex-column"}>
              <FontAwesomeIcon icon={faPhone} className="fa-3x mb-3" />
              <p className="text-center">Real Estate AB Huvudkontor</p>
              <p className="text-center">08-65 45 21 00</p>
            </Section>
            <Section className={"col d-flex flex-column"}>
              <FontAwesomeIcon icon={faEnvelope} className="fa-3x mb-3" />
              <p className="text-center">Real Estate AB Huvudkontor</p>
              <p className="text-center">info@realestate.se</p>
            </Section>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <ContactForm
            data={contact}
            onChange={handleFieldChange}
            submit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
