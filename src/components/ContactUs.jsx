import Section from "./Section";
import ContactForm from "./ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <>
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
        <div className="col">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
