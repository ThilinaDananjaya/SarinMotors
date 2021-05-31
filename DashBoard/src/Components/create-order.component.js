import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class CreateOrder extends Component{

    constructor(props){
        super(props);

        this.onChangeOrderId = this.onChangeOrderId.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePayment = this.onChangePayment.bind(this);
        this.onChangeAgent = this.onChangeAgent.bind(this);
        this.onChangeShipper=this.onChangeShipper.bind(this);
        this.onChangeManager=this.onChangeManager.bind(this);
        this.onChangeCustomer=this.onChangeCustomer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    

        this.state={
            username: '',
            date:new Date(),
            payment:0,
            agent:'',
            shipper:'',
            manager:'',
            customer:'',

            
            agents:[],
            shippers:[],
            managers:[],
            users:[],

            customers:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5001/agents/')
        .then(Response=>{
            if(Response.data.length>0){
                this.setState({
                    agents:Response.data.map(agent=>agent.agentId),
                    agentId:Response.data[0].agentId 
                })
            }
        })

        axios.get('http://localhost:5001/shippers/')
        .then(Response=>{
            if(Response.data.length>0){
                this.setState({
                    shippers:Response.data.map(shipper=>shipper.shipperId),
                    shipperId:Response.data[0].shipperId 
                })
            }
        })
        axios.get('http://localhost:5001/users/')
        .then(Response=>{
            if(Response.data.length>0){
                this.setState({
                users:Response.data.map(username=>username.username),
                    username:Response.data[0].username 
                })
            }
        })

        axios.get('http://localhost:5001/customers/')
        .then(Response=>{
            if(Response.data.length>0){
                this.setState({
                    customers:Response.data.map(customer=>customer.username),
                    username:Response.data[0].username 
                })
            }
        })
        
   
       }


    onChangeOrderId(e){
        this.setState({
            username: e.target.value
        });
    } 

    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onChangePayment(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeAgent(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeShipper(e){
        this.setState({
            shipper: e.target.value
        });
    }
    onChangeManager(e){
        this.setState({
            manager: e.target.value
        });
    }
    onChangeCustomer(e){
        this.setState({
            customer: e.target.value
        });
    }
  
    onSubmit(e){
        e.preventDefault( );

        const customer={
           orderId: this.state.orderId,
           date:this.state.date,
           payment:this.state.payment,
           agent:this.state.agent,
           shipper:this.state.shipper,
           manager:this.state.manager,
           customer:this.state.customer
    }

    console.log(customer);

    axios.post('http://localhost:5001/customers/add', customer)
    .then(res => console.log(res.data));


    
}
render() {
    return (
    <div>
      <h3>Add Orders</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>OrderId: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.orderId}
              onChange={this.onChangeOrderId}
              />
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
          <label>Payment </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.payment}
              onChange={this.onChangePayment}
              />
        </div>

        <div className="form-group"> 
          <label>Agent </label>
          <select ref="agentInput"
              required
              className="form-control"
              value={this.state.agent}
              onChange={this.onChangeAgent}>
              {
                this.state.agents.map(function(agent) {
                  return <option 
                    key={agent}
                    value={agent}>{agent}
                    </option>;
                }) 
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Shipper </label>
          <select ref="shipperInput"
              required
              className="form-control"
              value={this.state.shipper}
              onChange={this.onChangeShipper}>
              {
                this.state.shippers.map(function(shipper) {
                  return <option 
                    key={shipper}
                    value={shipper}>{shipper}
                    </option>;
                }) 
              }
          </select>
        </div>
        
    

        <div className="form-group"> 
          <label>Manager</label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeAgent}>
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
          <label>Customer </label>
          <select ref="customerInput"
              required
              className="form-control"
              value={this.state.customer}
              onChange={this.onChangeCustomer}>
              {
                this.state.customers.map(function(customer) {
                  return <option 
                    key={customer}
                    value={customer}>{customer}
                    </option>;
                }) 
              }
          </select>
        </div>
        


        <div className="form-group">
          <input type="submit" value="Create Order" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
