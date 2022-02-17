import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import QA from "../QAList/QAList";
import {getQAByID , updateQA} from "../../lib/endpoints";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default function EditQA () {
  const { id: queAnsId } = useParams();
  const [queAnsData, setQueAnsData] = useState<any>({});
  const navigate=useNavigate()
  
  

  const handleUpdateQA = () => {
    const {id, question, answer} = queAnsData;
    console.log(id, question,answer,queAnsId)
    axios
      .put(`${updateQA}?id=${queAnsId}`, {
        question,
        answer
      })
      .then(function(response) {
        Swal.fire({
          icon: "success",
          title: "QA have been edited successfully",
          showConfirmButton: false,
          timer: 1500,
        });  
        // handle success
        console.log({ QA: response.data });
        navigate("/QAList")
        return response.data;
      });
  };
 useEffect(() => {
   
    axios.get(`${getQAByID}?id=${queAnsId}`).then((response) => {
      setQueAnsData(response.data[0] );
    });
  },[]);
  const handleQChange = (event:any) => {
    const value = event.target.value;
    const queAns = { ...queAnsData };
    queAns.question = value;
    setQueAnsData(queAns);
  };
  const handleAChange = (event:any) => {
    const value = event.target.value;
    const queAns = { ...queAnsData };
    queAns.answer = value;
    setQueAnsData(queAns);
  };
 
    return (
      //
      <div className="container">
        {/* <form onSubmit={submitForm}> */} 
         <label className="label">Edit Chatbot Question</label>
        <br />

        <input
          value={queAnsData?.question}
          // onChange={(e) => setId(e.target.value)}
          type="text"
          
          className="input"
          onChange={handleQChange}
        />

        <br />
        <label className="label">Edit Chatbot Answer</label>
        <br />
        <input
          value={queAnsData?.answer}
          // onChange={(e) => setPublic_key(e.target.value)}

          type="text"
          className="input"
          onChange={handleAChange}
        />

        <br />
        <button
          type="submit"
          className="btn"
          //@ts-ignore
          onClick={handleUpdateQA}
        >
          Submit
        </button>
        
      </div>
    );
  }

