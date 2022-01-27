import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import QA from "../QAList/QAList";
import {getQAByID , updateQA} from "../../lib/endpoints";

interface IState {
  // id: any;
  // public_key: any;
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
  // editUser = (id: any, public_key: any) => {
  //   axios
  //     .put(`${`http://localhost:9000/app/updateUser`}?id=${id}`, {
  //       public_key,
  //     })
  //     .then(function(data) {
  //       // handle success
  //       console.log({ Users: data.data });
  //       return data.data;
  //     });
  // };

  handleUpdateQA = () => {
    const {id, question, answer} = this.state.queAnsData;
    axios
      .put(`${updateQA}?id=${id}`, {
        question,
        answer
      })
      .then(function(response) {
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
    // const id = this.state.id;
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
          // placeholder="Please enter user's ID"
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
          className="btn1"
          //@ts-ignore
          onClick={this.handleUpdateQA}
        >
          Submit
        </button>
      </div>
    );
  }
}
