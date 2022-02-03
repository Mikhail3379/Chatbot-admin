import React, { useState } from "react";
import "./AddQA.css";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function AddQA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const submitForm = (event:any) => {
    event.preventDefault()
    let body = {
      id: uuidv4(),
      question,
      answer,
    };
    

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      fetch("http://localhost:9000/app/addQA", requestOptions)
        .then((response) => response.json())
        Swal.fire({
          icon: "success",
          title: "QA have been added successfully",
          showConfirmButton: false,
          timer: 1500,
        });  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <label className="label">Chatbot Question</label>
        <br />
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          placeholder="Please enter your question"
          className="input"
        />
        <br />
        <label className="label">Chatbot Answer</label>
        <br />
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          placeholder="Please enter your answer"
          className="input"
        />
        <br />
        <button type="submit" className="btn btn-sm btn-outline-secondary">
          Add QA
        </button>
        <Link to={"/QAList"}
                            className="btn btn-sm btn-outline-secondary"
                            >QA List</Link>
      </form>
    </div>
  );
}

export default AddQA;
