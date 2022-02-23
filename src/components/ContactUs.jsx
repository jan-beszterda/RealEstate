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
    <>
      {success && (
        <div className="overlay">
          <span className="text-center">Thank you for your message</span>
        </div>
      )}
      <div className="row mb-4">
        <h2 className="text-center">Kontakta oss</h2>
      </div>
      <div className="row justify-content-center">
        <Section
          className={
            "col-2 d-flex flex-column justify-content-center align-self-center"
          }
        >
          <FontAwesomeIcon icon={faMapLocationDot} className="fa-3x mb-3" />
          <p className="text-center">Hej</p>
          <p className="text-center">Hej</p>
        </Section>
        <div className="w-100 d-block d-md-none"></div>
        <Section
          className={
            "col-2 d-flex flex-column justify-content-center align-self-center"
          }
        >
          <FontAwesomeIcon icon={faPhone} className="fa-3x mb-3" />
          <p className="text-center">Hej</p>
          <p className="text-center">Hej</p>
        </Section>
        <div className="w-100 d-block d-md-none"></div>
        <Section
          className={
            "col-2 d-flex flex-column justify-content-center align-self-center"
          }
        >
          <FontAwesomeIcon icon={faEnvelope} className="fa-3x mb-3" />
          <p className="text-center">Hej</p>
          <p className="text-center">Hej</p>
        </Section>
        <div className="w-100 d-block d-md-none"></div>
        <div className="col d-flex flex-column justify-content-center">
          <ContactForm
            data={contact}
            onChange={handleFieldChange}
            submit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
