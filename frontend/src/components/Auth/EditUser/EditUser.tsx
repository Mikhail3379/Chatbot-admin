import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Users from "../../Users/Users";
import { updateUser } from "../../../lib/endpoints";

interface IState {
  id: any;
  public_key:any
}

export default class editUser extends React.Component<any, IState> {
  static id: string | number | readonly string[] | undefined;
  static public_key: string | number | readonly string[] | undefined;
  constructor(props: any) {
    super(props);
    // this.state = { id, public_key };
  function editUser(id: any, public_key: any) {
    axios.put(`${`http://localhost:9000/app/updateUser`}?id=${id}`, {public_key}).then(function (data) {
      // handle success
      console.log({ Users: data.data });
      return data.data;
    })
    
  }

  const updateUser = (id: any, public_key: any) => {
    axios
      .put(`${updateUser}?id=${id}`, {
          public_key,
      })
      .then(function (response) {
        // handle success
        console.log({ Users: response.data });
        return response.data;
      
      })
  
  
  
    }
  }
    
   public render () {
    // const id = this.state.id;
    return (
//      
<div className="container">
      {/* <form onSubmit={submitForm}> */}
        <label className="label">Edit User's ID</label>
        <br />
        
        <input
          value={editUser.id}
          // onChange={(e) => setId(e.target.value)}
          type="text"
          // placeholder="Please enter user's ID"
          className="input"
        />
        
        <br />
        <label className="label">Edit User's public key</label>
        <br />
        <input
          value={editUser.public_key}
          // onChange={(e) => setPublic_key(e.target.value)}
        
          
          type="text"
          
          className="input"
        />
       
        <br />
        <button type="submit" className="btn1"
         
                               //@ts-ignore
                              onClick={updateUser}>
          Submit
        </button>
                  
      </div>
    )
                  
  }
}
  
