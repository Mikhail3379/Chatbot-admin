import React, { useState } from "react";

import "./AddUser.css";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
function AddUser() {
  // const [id, setId] = useState("");

  const navigate = useNavigate();
  const [public_key, setPublic_key] = useState("");
  // const history = useHistory();
  const submitForm = (event: any) => {
    event.preventDefault();
    let body = {
      id: uuidv4(),
      public_key,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      fetch(
        "http://localhost:9000/app/addUser",
        requestOptions
      ).then((response) => response.json());
      Swal.fire({
        icon: "success",
        title: "User has been added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/Users");
      // history.go(-1)
      // history.push('/Users')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
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
        <button type="submit" className="btn">
          Add User
        </button>
        
      </form>
    </div>
  );
}

export default AddUser;
