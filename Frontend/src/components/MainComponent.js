import Inventory from "./InventoryComponent";
import VehicleCard from "../shared/cars";
import MachineCard from "../shared/machines";
import { COMMENTS } from "../shared/comments";
// import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";

import { Component } from "react";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Signup from "./SignUpComponent";
import Login from "./LogInComponent";

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: COMMENTS,
      promotions: PROMOTIONS,
      // leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          // dish={this.state.cars.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          // leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          {/* <Route
            exact
            path="/inventory"
            component={() => <Inventory cars={this.state.cars} />}
          /> */}
          <Route path="/vehicles" exact component={VehicleCard} />
          <Route path="/machines" exact component={MachineCard} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Route exact path="/contactus" component={Contact} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
