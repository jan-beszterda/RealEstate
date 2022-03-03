import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

const Filter = (props) => {
  const close = () => {
    props.close();
  };

  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  const reset = () => {
    props.reset();
  };

  const submit = (e) => {
    e.preventDefault();
    props.submit();
  };

  return (
    <form className="contact-form my-4 p-3" onSubmit={submit}>
      <div className="row justify-content-end">
        <div className="col-1 text-center">
          <Button className={"btn-icon"} type={"button"} onClick={close}>
            <FontAwesomeIcon icon={faXmark} className="fa-2x" />
          </Button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-6 align-items-end">
        <div className="col">
          <label className="form-label" htmlFor="price">
            Pris
          </label>
          <input
            className="form-control mb-2"
            type="number"
            name="minPrice"
            placeholder="Min pris"
            min="100000"
            max="15000000"
            step={"10000"}
            value={props.data.minPrice}
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="number"
            name="maxPrice"
            placeholder="Max pris"
            min="100000"
            max="15000000"
            step={"5000"}
            value={props.data.maxPrice}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="rooms">
            Rum
          </label>
          <input
            className="form-control mb-2"
            type="number"
            name="minRooms"
            placeholder="Min rum"
            min="1"
            max="10"
            step={"1"}
            value={props.data.minRooms}
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="number"
            name="maxRooms"
            placeholder="Max rum"
            min="1"
            max="10"
            step={"1"}
            value={props.data.maxRooms}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="bathrooms">
            Badrum
          </label>
          <input
            className="form-control mb-2"
            type="number"
            name="minBathrooms"
            placeholder="Min badrum"
            min="1"
            max="5"
            step={"1"}
            value={props.data.minBathrooms}
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="number"
            name="maxBathrooms"
            placeholder="Max badrum"
            min="1"
            max="5"
            step={"1"}
            value={props.data.maxBathrooms}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="area">
            Boarea
          </label>
          <input
            className="form-control mb-2"
            type="number"
            name="minArea"
            placeholder="Min boarea"
            min="25"
            max="250"
            step={"1"}
            value={props.data.minArea}
            onChange={handleChange}
          />
          <input
            className="form-control"
            type="number"
            name="maxArea"
            placeholder="Max boarea"
            min="25"
            max="250"
            step={"1"}
            value={props.data.maxArea}
            onChange={handleChange}
          />
        </div>
        <div className="col text-center">
          <Button className={"btn btn-primary btn-lg my-2"} type={"submit"}>
            Filtrera
          </Button>
        </div>
        <div className="col text-center">
          <Button
            className={"btn btn-dark btn-lg shadow-none my-2"}
            type={"reset"}
            onClick={reset}
          >
            Återställ
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Filter;
