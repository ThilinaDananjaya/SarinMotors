import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CustomClearanceList from "./customclearance-list.component";
import swal from "sweetalert";



export default class CreateCustomClearance extends Component{

    constructor(props){
        super(props);

        this.onChangeOrderId = this.onChangeOrderId.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCustomPayment = this.onChangeCustomPayment.bind(this);
        this.onChangeTransportPayment = this.onChangeTransportPayment.bind(this);
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
    

        this.state={
            orderId: '',
            date:new Date(),
            customPayment:0,
            transportPayment:0,
            user:'',


        
        
            orders:[],
            users:[] 
        }
    }

    componentDidMount(){
     axios.get('http://localhost:5001/users/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 users:Response.data.map(user=>user.username),
                 username:Response.data[0].username 
             })
         }
     })

     axios.get('http://localhost:5001/orders/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 orders:Response.data.map(order=>order.orderId),
                 orderId:Response.data[0].orderId 
             })
         }
     })
     

    }

    onChangeOrderId(e){
        this.setState({
            orderId: e.target.value
        });
    } 
    onChangeDate(date){
        this.setState({
            date:date
        });
    }
    onChangeCustomPayment(e){
        this.setState({
            customPayment: e.target.value
        });
    }
    onChangeTransportPayment(e){
        this.setState({
            transportPayment: e.target.value
        });
    }
  
    onChangeUser(e){
        this.setState({
            user: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault( );

        const cutomclearance={
           orderId: this.state.orderId,
           date:this.state.date,
           customPayment:this.state.customPayment,
           transportPayment:this.state.transportPayment,  
           user:this.state.user,
         
    }

    console.log(cutomclearance);

    axios.post('http://localhost:5001/customclearances/add',cutomclearance)
    .then(res=>console.log(res.data))
    .catch(error=>{
        console.log(error.response);
    })

    



    this.setState({
        orderId:'',
        customPayment:0,
        transportPayment:0,
        shipper:0,
        user:'',

    })
    swal("Add new customer?")
    .then((value) => {
      document.location.reload();
});


}





render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-4 bg-light border p-5">
      <h3>Add Custom Clerance Details</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        <label>Order ID </label>
        <select ref="userInput"
              required
              className="form-control"
              value={this.state.orderId}
              onChange={this.onChangeOrderId}>
              {
                this.state.orders.map(function(orderId) {
                  return <option 
                    key={orderId}
                    value={orderId}>{orderId}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group"> 
        <label>Custom Payment</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.customPayment}
              onChange={this.onChangeCustomPayment}
              />  
        </div>
        <div className="form-group"> 
        <label>Transport Payment</label>
          <input 
            placeholder="Rs."
              type="text" 
              className="form-control"
              value={this.state.transportPayment}
              onChange={this.onChangeTransportPayment}
              />  
        </div>

        <div className="form-group"> 
          <label>Sales Person </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeUser}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>




       


        <div className="form-group">
          <input type="submit" value="Receive order" className="btn btn-primary" />
        </div>
        
      </form>
      </div>
      
      <div className="col-7 bg-light">
              <CustomClearanceList/>
      </div>
    </div>
    </div>
    )
  }
}
