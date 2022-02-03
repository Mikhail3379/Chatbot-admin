import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Users from "../../Users/Users";
import { getUserByID, updateUser } from "../../../lib/endpoints";
import Swal from "sweetalert2";

interface IState {
 
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
  

  handleUpdateUser = () => {
    const { id, public_key } = this.state.userData;
    axios
      .put(`${updateUser}?id=${id}`, {
        public_key,
      })
      .then(function(response) {
        Swal.fire({
          icon: "success",
          title: "User has been edited successfully",
          showConfirmButton: false,
          timer: 1500,
        });  
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
    
    const { userData } = this.state;
    return (
      
      <div className="container">
       

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
          className="btn "
          //@ts-ignore
          onClick={this.handleUpdateUser}
        >
          Submit
        </button>
        <Link to={"/Users"}
                            className="btn btn-sm btn-outline-secondary"
                            > List of Users </Link>
      </div>
    );
  }
}
