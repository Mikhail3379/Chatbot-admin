import * as React from "react";
import "./App.css";
import {
  Route,
  Link,
  Routes,
  
} from "react-router-dom";


import AddUser from "./components/Auth/AddUser/AddUser";
import EditUser from "./components/Auth/EditUser/EditUser";

import QAList from "./components/QAList/QAList";
import Users from "./components/Users/Users";
import AddQA from "./components/AddQA/AddQA";
import EditQA from "./components/EditQA/EditQA";


class App extends React.Component {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/Users"}> Users </Link>
            </li>

            <li>
              <Link to={"/QAList"}> QA List </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          
          <Route path="/Users" element={<Users />} />

          <Route path="/AddUser" element={<AddUser />} />

          <Route path="/Users/editUser/:id" element={<EditUser />} />
          <Route path="/QAList" element={<QAList />} />

          <Route path="/AddQA" element={<AddQA />} />

          <Route path="/QAList/editQA/:id" element={<EditQA />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </div>
    );
  }
}
export default App;
