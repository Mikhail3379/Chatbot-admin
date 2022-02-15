import * as React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Users from "../../Users/Users";
import { getUserByID, updateUser } from "../../../lib/endpoints";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

// interface IState {
//   userId: string;
//   userData: any;
// }

export default function EditUser() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState<any>({});
  const navigate=useNavigate()
  // export default class editUser extends React.Component<any, IState> {

  // static id: string | number | readonly string[] | undefined;
  // static public_key: string | number | readonly string[] | undefined;

  const handleUpdateUser = () => {
    const { id, public_key } = userData;
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
        navigate("/Users")
        // window.location.assign("#/Users");
        return response.data;
      });
  };
  useEffect(() => {
    // const userId = this.props.match.params.id;

    axios.get(`${getUserByID}?id=${userId}`).then((response) => {
      setUserData(response.data[0]);
    });
  }, []);

  const handlePublicKeyChange = (event: any) => {
    const value = event.target.value;
    const user = { ...userData };
    user.public_key = value;
    setUserData(user);
  };

  return (
    <div className="container">
      <br />
      <label className="label">Edit User's public key</label>
      <br />
      <input
        value={userData?.public_key}
        // onChange={(e) => setPublic_key(e.target.value)}

        type="text"
        className="input"
        onChange={handlePublicKeyChange}
      />

      <br />
      <button
        type="submit"
        className="btn "
        //@ts-ignore
        onClick={handleUpdateUser}
      >
        Submit
      </button>
      
    </div>
  );
}
