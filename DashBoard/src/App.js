import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer.component";
import AgentCard from "./Components/Agents/agent-view.component";
import ShipperCard from "./Components/Shippers/shipper-view.component";
import VehicleCard from "./Components/vehicles/vehicle-view.component";
import MachineCard from "./Components/Machines/machine-view.component";
import AgentSingle from "./Components/Agents/agent";
import CreateTest from "./Components/test.component";
import OrderCard from "./Components/Orders/orderview.component";
import CustomerCard from "./Components/Customers/customer-view.component";
import UserCard from "./Components/User/user-view.component";
import AuctionSheet from "./Components/Orders/order";
import SaleCard from "./Components/Sales/view-sales.component";
import EditAgent from "./Components/Agents/updateAgent";
import EditEmployee from "./Components/User/updateUser";
import Home from "./Components/home";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/agents" exact component={AgentCard} />
        <Route
          path="/agent/:id"
          render={(props) => <AgentSingle {...props} />}
        />
        <Route
          path="/agent/update/:id"
          render={(props) => <EditAgent {...props} />}
        />
        <Route
          path="/user/update/:id"
          render={(props) => <EditEmployee {...props} />}
        />
        <Route path="/shippers" exact component={ShipperCard} />
        <Route path="/vehicles" exact component={VehicleCard} />
        <Route path="/machines" exact component={MachineCard} />
        <Route path="/orders" exact component={OrderCard} />
        <Route
          path="/order/:id"
          render={(props) => <AuctionSheet {...props} />}
        />
        <Route path="/tests" exact component={CreateTest} />
        <Route path="/customers" exact component={CustomerCard} />
        <Route path="/users" exact component={UserCard} />
        <Route path="/sales" exact component={SaleCard} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
