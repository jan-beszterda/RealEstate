import Button from "./Button";

const BookingForm = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  return (
    <div className="container-sm">
      <h2 className="text-center">Boka vising</h2>
      <form className="contact-form p-3" onSubmit={props.submit}>
        <label className="form-label mb-1" htmlFor="firstName">
          Förnamn
        </label>
        <input
          className="form-control mb-4"
          name="firstName"
          type="text"
          value={props.data.firstName}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="lastName">
          Efternamn
        </label>
        <input
          className="form-control mb-4"
          name="lastName"
          type="text"
          value={props.data.lastName}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="date">
          Datum
        </label>
        <input
          className="form-control mb-4"
          name="date"
          type="date"
          value={props.data.date}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="form-control mb-4"
          name="email"
          type="email"
          value={props.data.email}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="phone">
          Telefon
        </label>
        <input
          className="form-control mb-4"
          name="phone"
          type="tel"
          value={props.data.phone}
          onChange={handleChange}
        />
        <Button className="btn btn-primary btn-lg" type="submit">
          Boka
        </Button>
        {props.success && (
          <div className="my-2">Vi har tagit emot din bokning!</div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
