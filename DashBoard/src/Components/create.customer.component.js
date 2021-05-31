import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CustomersList from "./customer-list.component";
export default class CreateCustomers extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile=this.onChangeMobile.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state={
            username: '',
            password:'',
            email:'',
            mobile:0,
            dob:new Date(),
            customers:[] 
        }
    }

  

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    } 
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeMobile(e){
        this.setState({
            mobile: e.target.value
        });
    }
    onChangeDob(dob){
        this.setState({
            dob: dob
        });
    }

    onSubmit(e){
        e.preventDefault( );

        const customer={
           username: this.state.username,
           password:this.state.password,
           email:this.state.email,
           mobile:this.state.mobile,
           dob:this.state.dob
    }

    console.log(customer);

    axios.post('http://localhost:5001/customers/add', customer)
    .then(res => console.log(res.data));


   
}
render() {
    return (
    <div>
      <h3>Add Customer</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Username </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group"> 
          <label>Password </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>Mobile </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.mobile}
              onChange={this.onChangeMobile}
              />
        </div>
        <div className="form-group">
          <label>Date of birth </label>
          <div>
            <DatePicker
              selected={this.state.dob}
              onChange={this.onChangeDob}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
    
      </form> 
      <div>
          <CustomersList/>
      </div>

    </div>
    )
  }
}
