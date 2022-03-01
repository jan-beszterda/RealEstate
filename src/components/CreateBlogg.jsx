import { useState } from "react";
import React from 'react'
import Button from "./Button";

function CreateBlogg() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [url, setUrl] = useState('');


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
            
            <label>URL</label>
            <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            />
            
            <Button className="btn btn-primary mb-4 ms-2">Skapa inlägg</Button>
        </form>
    </div>
  )
}

export default CreateBlogg