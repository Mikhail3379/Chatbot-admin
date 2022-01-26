import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
// import { getQAById } from "../../lib/axios";
// import { deleteUser } from "../../lib/axios";

interface IState {
  users: any[];
}

export default class Users extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { users: [] };
  }
  public componentDidMount(): void {
   
    axios.get(`http://localhost:9000/app/allUsers`).then((data) => {
      this.setState({ users: data.data });
    });
  }
  // public deleteUser(id: any) {
  //   console.log("idUSEr ======== "+JSON.stringify(id))
  //   axios.delete(`${`http://localhost:9000/app/deleteUser`}?id=${id}`).then(function (data) {
  //     // handle success
  //     console.log({ Users: data.data });
  //     return data.data;
  //   })
    
  // }
  public deleteUser(id: any) {
    axios.delete(`${`http://localhost:9000/app/deleteUser`}?id=${id}`).then(function (data) {
      // handle success
      console.log({ Users: data.data });
      return data.data;
    })
    
  // }
    // then((data) => {
    //   const index = this.state.users.findIndex((user) => user.id === id);
    //   this.state.users.splice(index, 1);
      // this.props.history.push("/");
  //   });
  // }
// public deleteUser (id: any) {
//     console.log("id = "+id);
//     axios
//       .delete(`${`http://localhost:9000/app/deleteUser`}?id=${id}`)
//       .then(function (response) {
//         // handle success
//         console.log({ users: response.data });
  }
  public render() {
    const users = this.state.users;
    return (
      <div>
        {users.length === 0 && (
          <div className="text-center">
            <h2>No user found at the moment</h2>
          </div>
        )}
        <div className="container">
          <div className="row">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Public key</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.public_key}</td>

                      <td>
                        <div className="d-flex justify-content-between align-items-center">
                          <div
                            className="btn-group"
                            style={{ marginBottom: "20px" }}
                          >
                            <Link
                              to={`editUser/${user.id}`}
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit User{" "}
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              // onClick={() => this.deleteUser(user.id)}
                               //@ts-ignore
                               onClick={() => this.deleteUser(user.id)}>
                              Delete User
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