import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// importing components 
import Navbar from "./Components/navbar.component";
import UserList from "./Components/user-list.component";
import EditUser from "./Components/edit-user.component";
import CreateUser from "./Components/create-user.component";
import CreateUserType from "./Components/create-usertype.component";
import UserTypesList from "./Components/usertype-list.component";
import CreateAgent from "./Components/create-agent.component";
import CreateShipper from "./Components/create-shipper.component";
import CreateCustomers from "./Components/create.customer.component";
import CreateOrder from "./Components/create-order.component";

function App() {
  return (
    <Router>
      <div className="container">  
    <Navbar/>
    <br/>
  
    <Route path="/" exact component={UserList} />  
    <Route path="/edit/:id" exact component={EditUser} />
    <Route path="/create" exact component={CreateUser} />
    <Route path="/usertypes" exact component={CreateUserType} />
    <Route path="/createusertype" exact component={UserTypesList}/>
    <Route path="/agents" exact component={CreateAgent}/>
    <Route path="/shippers" exact component={CreateShipper}/>
    <Route path="/customers" exact component={CreateCustomers}/>
    <Route path="/orders" exact component={CreateOrder}/>


    </div>
    </Router>
  );
}

export default App;
