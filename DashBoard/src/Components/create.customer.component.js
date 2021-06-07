import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CustomersList from "./customer-list.component";
//validator
import SimpleReactValidator from 'simple-react-validator';
//moment-date and time
import moment from 'moment';
moment().format();


export default class CreateCustomers extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobile=this.onChangeMobile.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //add validations
        this.validator = new SimpleReactValidator();
    
        this.state={
            username: '',
            password:'',
            email:'',
            mobile:0,
            dob:new Date(),
            customers:[] ,
            date:moment().calendar()
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

        if (this.validator.allValid()) {
          alert('You submitted the form and stuff!');
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
 
        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          // you can use the autoForceUpdate option to do this automatically`
          this.forceUpdate();
        }
      }


    //     const customer={
    //        username: this.state.username,
    //        password:this.state.password,
    //        email:this.state.email,
    //        mobile:this.state.mobile,
    //        dob:this.state.dob
    // }

    // console.log(customer);

    // axios.post('http://localhost:5001/customers/add', customer)
    // .then(res => console.log(res.data));

    // this.setState({
    //   username:'',
    //   password:'',
    //   email:'',
    //   mobile:'',
    //   dob:''
    // })

    // window.location.reload(false);
   



render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-3 border pt-5 pb-5 bg-light">
      <h3>Add Customer</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Username </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              onBlur={()=>this.validator.showMessageFor('username')}
              />
               {this.validator.message('username', this.state.username, 'required|alpha',{className:'text-danger'})}
        </div>
        <div className="form-group"> 
          <label>Password </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              onBlur={()=>this.validator.showMessageFor('password')}
              />

              {this.validator.message('password', this.state.password, 'required|alpha|max:8',{className:'text-danger'})}
              
        </div>
        <div className="form-group">
          <label>Email </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              onBlur={()=>this.validator.showMessageFor('email')}
              />
           {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}
        </div>
        <div className="form-group">
          <label>Mobile </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.mobile}
              onChange={this.onChangeMobile}
              onBlur={()=>this.validator.showMessageFor('mobile')}

              />
                {this.validator.message('mobile', this.state.mobile, 'required|phone|max:10', { className: 'text-danger' })}
        </div>
        <div className="form-group">
          <label>Date of birth </label>
          <div>
            <DatePicker
              selected={this.state.dob}
              onChange={this.onChangeDob}
            />
             {this.validator.message('dob', this.state.dob, `required`, { className: 'text-danger' })}
          </div>
        </div>
        <br></br>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
    
      </form> 
      </div>
      
      <div className="col-9 border bg-light">
          <CustomersList/>
      </div>
      </div>
    </div>
    )
  }
}
