import React from "react";
import Button from "./Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateBlogg(props) {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  return props.trigger ? (
    <div className="create my-3">
      <button className="btn-icon" onClick={() => props.setTrigger(false)}>
        <FontAwesomeIcon icon={faXmark} className="fa-2x" />
      </button>

      <h2>Skapa nytt inlägg</h2>
      <form onSubmit={props.submit}>
        <label>Rubrik</label>
        <input
          type="text"
          name="title"
          required
          value={props.data.title}
          onChange={handleChange}
        />
        <label>Information</label>
        <textarea
          type="text"
          name="text"
          required
          value={props.data.text}
          onChange={handleChange}
        ></textarea>

        <label>URL</label>
        <input
          type="text"
          name="url"
          value={props.data.url}
          onChange={handleChange}
        />

        <Button className="btn btn-primary mb-4 ms-2">Skapa inlägg</Button>
        {props.children}
      </form>
    </div>
  ) : null;
}

export default CreateBlogg;
