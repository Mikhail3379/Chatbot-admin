import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QA from "../QAList/QAList";
import {getQAByID , updateQA} from "../../lib/endpoints";
import Swal from "sweetalert2";

interface IState {
  
  queAnsId: string;
  queAnsData: any;
}

export default class editQA extends React.Component<any, IState> {
  static question: string | number | readonly string[] | undefined;
  static answer: string | number | readonly string[] | undefined;
  constructor(props: any) {
    super(props);
    this.state = { queAnsId: "", queAnsData: {} };
  }
  

  handleUpdateQA = () => {
    const {id, question, answer} = this.state.queAnsData;
    axios
      .put(`${updateQA}?id=${id}`, {
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
        return response.data;
      });
  };
  componentDidMount() {
    const queAnsId = this.props.match.params.id;
    this.setState({ queAnsId });
    axios.get(`${getQAByID}?id=${queAnsId}`).then((response) => {
      this.setState({ queAnsData: response.data[0] });
    });
  }
  handleQChange = (event: any) => {
    const value = event.target.value;
    const queAns = { ...this.state.queAnsData };
    queAns.question = value;
    this.setState({ queAnsData: queAns });
  };
  handleAChange = (event: any) => {
    const value = event.target.value;
    const queAns = { ...this.state.queAnsData };
    queAns.answer = value;
    this.setState({ queAnsData: queAns });
  };
  public render() {
    
    const { queAnsData } = this.state;
    return (
      //
      <div className="container">
        {/* <form onSubmit={submitForm}> */} 
         <label className="label">Edit Chatbot Question</label>
        <br />

        <input
          value={queAnsData.question}
          // onChange={(e) => setId(e.target.value)}
          type="text"
          
          className="input"
          onChange={this.handleQChange}
        />

        <br />
        <label className="label">Edit Chatbot Answer</label>
        <br />
        <input
          value={queAnsData.answer}
          // onChange={(e) => setPublic_key(e.target.value)}

          type="text"
          className="input"
          onChange={this.handleAChange}
        />

        <br />
        <button
          type="submit"
          className="btn"
          //@ts-ignore
          onClick={this.handleUpdateQA}
        >
          Submit
        </button>
        <Link to={"/QAList"}
                            className="btn btn-sm btn-outline-secondary"
                            >QA List</Link>
      </div>
    );
  }
}
