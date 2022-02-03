import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";

interface IState {
  qa: any[];
}

export default class QA extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { qa: [] };
  }
  public componentDidMount(): void {
    axios.get(`http://localhost:9000/app/allQA`).then((data) => {
      this.setState({ qa: data.data });
    });
  }

  deleteQA = (id: any) => {
    let self = this;
    Swal.fire({
      title: "Are you sure you want to delete this ?",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`${`http://localhost:9000/app/deleteQA`}?id=${id}`)
          .then(function(data) {
            const newQA = self.state.qa.filter(
              (queAns: any) => queAns.id != id
            );
            self.setState({ qa: newQA });
            Swal.fire({
              icon: "success",
              title: "Successfully deleted",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "An error occured while deleting this",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };
  public render() {
    const qa = this.state.qa;
    return (
      <div>
        {qa.length === 0 && (
          <div className="text-center">
            <h2>No data found at the moment</h2>
          </div>
        )}
        
        <Link to={"/AddQA"}
                            className="btn btn-sm btn-outline-secondary"
                            > Add QA </Link>
         
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
                {qa &&
                  qa.map((queAns) => (
                    <tr key={queAns.id}>
                      <td>{queAns.question}</td>
                      <td>{queAns.answer}</td>

                      <td>
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            className="btn-group"
                            style={{ marginBottom: "20px" }}
                          >
                            <Link
                              to={`editQA/${queAns.id}`}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit QA{" "}
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              //@ts-ignore
                              onClick={() => this.deleteQA(queAns.id)}
                            >
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
