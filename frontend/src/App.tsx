import * as React from "react";
import "./App.css";
import {
  Route,
  Link,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
// import { Provider } from "react-redux";

import AddUser from "./components/Auth/AddUser/AddUser";
import EditUser from "./components/Auth/EditUser/EditUser";

import QAList from "./components/QAList/QAList";
import Users from "./components/Users/Users";
import AddQA from "./components/AddQA/AddQA";
import EditQA from "./components/EditQA/EditQA";
// import AddUser from "./Auth/AddUser/AddUser";
// import DeleteUser from "./Auth/DeleteUser/DeleteUser";

class App extends React.Component<RouteComponentProps<any, any, any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/Users"}> Users </Link>
            </li>
            <li>
              <Link to={"/AddUser"}> Add User </Link>
            </li>
            <li>
              <Link to={"/EditUser"}> Edit User </Link>
            </li>
            <li>
              <Link to={"/QAList"}> QA List </Link>
            </li>
            <li>
              <Link to={"/AddQA"}> Add QA </Link>
            </li>

            <li>
              <Link to={"/EditQA"}> Edit QA </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/* <Route path="/Home" element={<Home/>} />
          <Route path="/AddUser" element={<AddUser/>} /> */}
          {/* <Route path="/AddUser" />
          <Route path="/DeleteUser" /> */}
          <Route path="/Users">
            <Users />{" "}
          </Route>
          <Route path="/AddUser">
            <AddUser />
          </Route>
          <Route path="/EditUser/:id" component={EditUser} />
          <Route path="/QAList">
            <QAList />
          </Route>
          <Route path="/AddQA">
            <AddQA />
          </Route>
          <Route path="/EditQA/:id" component={EditQA} />
            
          
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
