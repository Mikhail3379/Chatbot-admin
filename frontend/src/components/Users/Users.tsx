import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";

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

  deleteUser = (id: any) => {
    let self = this;
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios
          .delete(`${`http://localhost:9000/app/deleteUser`}?id=${id}`)
          .then(function(data) {
            const newUsers = self.state.users.filter(
              (user: any) => user.id !== id
            );
            self.setState({ users: newUsers });
            Swal.fire({
              icon: "success",
              title: "User has been deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "An error occured while deleting this user",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };
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
                              //@ts-ignore
                              onClick={() => this.deleteUser(user.id)}
                            >
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
