import React, { useState } from "react";
import "./AddUser.css";
import { v4 as uuidv4 } from "uuid";
function AddUser() {
  const [id, setId] = useState("");
    const [public_key, setPublic_key] = useState("");
 
  const submitForm = (event:any) => {
    
  
    event.preventDefault()
    let body = {
      id: uuidv4(),
      public_key
    };
    

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      fetch("http://localhost:9000/app/addUser", requestOptions)
        .then((response) => response.json())
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <label className="label">User's ID</label>
        <br />
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="Please enter user's ID"
          className="input"
        />
        <br />
        <label className="label">Public key</label>
        <br />
        <input
          value={public_key}
          onChange={(e) => setPublic_key(e.target.value)}
          type="text"
          placeholder="Please enter user's public key"
          className="input"
        />
        <br />
        <button type="submit" className="btn1">
          Send
        </button>
      </form>
    </div>
  );
}

export default AddUser;
