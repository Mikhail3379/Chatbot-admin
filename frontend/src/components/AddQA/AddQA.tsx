import React, { useState } from "react";
import "./AddQA.css";
import { v4 as uuidv4 } from "uuid";
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
    // fetch("http://localhost:8000/app/addChatbot", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     // "Access-Control-Allow-Origin": "http://localhost:3000",
    //   },
    //   body: JSON.stringify(body),
    // }).then((data) => {
    //   console.info(data);
    // });

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    try {
      fetch("http://localhost:9000/app/addQA", requestOptions)
        .then((response) => response.json())
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
        <button type="submit" className="btn1">
          Send
        </button>
      </form>
    </div>
  );
}

export default AddQA;
