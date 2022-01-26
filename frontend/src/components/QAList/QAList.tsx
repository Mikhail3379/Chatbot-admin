import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";



interface IState {
  QA: any[];
}

export default class Home extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { QA: [] };
  }
  public componentDidMount(): void {
   
    axios.get(`http://localhost:9000/app/allQA`).then((data) => {
      this.setState({ QA: data.data });
    });
  }
  // public deleteQA(id: number) {
  //   axios.delete(`http://localhost:9000/app/deleteQA`).then((data) => {
  //     const index = this.state.users.findIndex((user) => user.id === id);
  //     this.state.users.splice(index, 1);
  //     // this.props.history.push("/");
  //   });
  // }
   deleteQA(id: any) {
    console.log("idQA ======== "+JSON.stringify(id))
    axios.delete(`${`http://localhost:9000/app/deleteQA`}?id=${id}`).then(function (data) {
      // handle success
      console.log({ QA: data.data });
      return data.data;
    })
    
  }
  public render() {
    const QA = this.state.QA;
    return (
      <div>
        {QA.length === 0 && (
          <div className="text-center">
            <h2>No data found at the moment</h2>
          </div>
        )}
        <div className="container">
          <div className="row">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Chatbot Question</th>
                  <th scope="col">Chatbot Answer</th>
                </tr>
              </thead>
              <tbody>
                {QA &&
                  QA.map((QA) => (
                    <tr key={QA.id}>
                      <td>{QA.question}</td>
                      <td>{QA.answer}</td>

                      <td>
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            className="btn-group"
                            style={{ marginBottom: "20px" }}
                          >
                             <Link
                              to={`editQA/${QA.id}`}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit QA{" "}
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              // onClick={() => this.deleteUser(user.id)}
                               //@ts-ignore
                               onClick={() => this.deleteQA(QA.id)}>
                              Delete QA
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
