import React from "react";
import Button from "./Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateBlogg(props) {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  return props.trigger ? (
    <div className="create-article contact-form my-4 p-3">
      <div className="row justify-content-end">
        <Button
          className={"col-1 btn-icon"}
          type={"button"}
          onClick={() => props.setTrigger(false)}
        >
          <FontAwesomeIcon icon={faXmark} className="fa-2x" />
        </Button>
      </div>
      <div className="row">
        <h3 className="text-center">Skapa nytt inlägg</h3>
      </div>
      <form className="" onSubmit={props.submit}>
        <label className="form-label mb-2" htmlFor="title">
          Rubrik
        </label>
        <input
          className="form-control mb-4"
          type="text"
          name="title"
          required
          value={props.data.title}
          onChange={handleChange}
        />
        <label className="form-label mb-2" htmlFor="text">
          Information
        </label>
        <textarea
          className="form-control mb-4"
          type="text"
          name="text"
          rows={10}
          required
          value={props.data.text}
          onChange={handleChange}
        ></textarea>
        <label className="form-label mb-2" htmlFor="url">
          Bild URL
        </label>
        <input
          className="form-control mb-4"
          type="text"
          name="url"
          value={props.data.url}
          onChange={handleChange}
        />
        <Button className="btn btn-primary btn-lg">Skapa inlägg</Button>
      </form>
    </div>
  ) : null;
}

export default CreateBlogg;
