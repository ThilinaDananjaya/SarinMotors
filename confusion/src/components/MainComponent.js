

import Inventory from './InventoryComponent';
import {CARS} from '../shared/cars';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

import { Component } from 'react';
import DishDetail from './DishDetailComponent';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

import {Switch, Route, Redirect} from 'react-router-dom';




class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      cars:CARS,
      comments:COMMENTS,
      promotions :PROMOTIONS,
      leaders : LEADERS
      
    };
    }

  



  render(){

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.cars.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    
    
  return (
    <div>
       <Header/>
       <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/inventory' component={() => <Inventory cars={this.state.cars} />} />
              <Route exact path='/contactus' component={Contact}/>
              <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders}/>}/>
              <Redirect to="/home" /> 
          </Switch>

       <Footer/> 
    </div>
    );
}
}

export default Main;
