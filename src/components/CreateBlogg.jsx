import { useState } from "react";
import React from 'react'
import Button from "./Button";

function CreateBlogg() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


  return (
    <div className="create">
        <h2>Skapa nytt inlägg</h2>
        <form>
            <label>Rubrik</label>
            <input 
            type="text" 
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <label>Information</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}>
                
            </textarea>
            <label>Skapare</label>
            <select>
                <option value=""></option>
                <option value=""></option>
            </select>
            <Button className="btn btn-primary mb-4 ms-2">Skapa inlägg</Button>
            <p>{title}</p>
            <p>{body}</p>
        </form>
    </div>
  )
}

export default CreateBlogg