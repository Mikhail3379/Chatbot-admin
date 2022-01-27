import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Users from "../../Users/Users";
import { getUserByID, updateUser } from "../../../lib/endpoints";

interface IState {
  // id: any;
  // public_key: any;
  userId: string;
  userData: any;
}

export default class editUser extends React.Component<any, IState> {
  static id: string | number | readonly string[] | undefined;
  static public_key: string | number | readonly string[] | undefined;
  constructor(props: any) {
    super(props);
    this.state = { userId: "", userData: {} };
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

  handleUpdateUser = () => {
    const { id, public_key } = this.state.userData;
    axios
      .put(`${updateUser}?id=${id}`, {
        public_key,
      })
      .then(function(response) {
        // handle success
        console.log({ Users: response.data });
        return response.data;
      });
  };
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.setState({ userId });
    axios.get(`${getUserByID}?id=${userId}`).then((response) => {
      this.setState({ userData: response.data[0] });
    });
  }
  handlePublicKeyChange = (event: any) => {
    const value = event.target.value;
    const user = { ...this.state.userData };
    user.public_key = value;
    this.setState({ userData: user });
  };
  public render() {
    // const id = this.state.id;
    const { userData } = this.state;
    return (
      //
      <div className="container">
        {/* <form onSubmit={submitForm}> */}
        {/* <label className="label">Edit User's ID</label>
        <br />

        <input
          value={userData.id}
          // onChange={(e) => setId(e.target.value)}
          type="text"
          // placeholder="Please enter user's ID"
          className="input"
          onChange={this.handleIdChange}
        /> */}

        <br />
        <label className="label">Edit User's public key</label>
        <br />
        <input
          value={userData.public_key}
          // onChange={(e) => setPublic_key(e.target.value)}

          type="text"
          className="input"
          onChange={this.handlePublicKeyChange}
        />

        <br />
        <button
          type="submit"
          className="btn1"
          //@ts-ignore
          onClick={this.handleUpdateUser}
        >
          Submit
        </button>
      </div>
    );
  }
}
