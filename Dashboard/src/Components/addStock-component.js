import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";


export default class AddStock extends Component{

    constructor(props){
        super(props);

        this.onChangeVehicleId = this.onChangeVehicleId.bind(this);
        this.onChangeMarketPrice = this.onChangeMarketPrice.bind(this);
        this.onChangeOrderId = this.onChangeOrderId.bind(this);
        this.onChangeModelName = this.onChangeModelName.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    

        this.state={
            vehicleId: '',
            marketPrice:0,
            orderId:'',
            modelName:'',
            

            orders:[]
        }
    }

    componentDidMount(){
    
     axios.get('http://localhost:5001/orders/')
     .then(Response=>{
         if(Response.data.length>0){
             this.setState({
                 orders:Response.data.map(orderId=>orderId.orderId),
                 orderId:Response.data[0].orderId 
             })
         }
     })
     

    }

    onChangeVehicleId(e){
        this.setState({
            vehicleId: e.target.value
        });
    } 
    
    onChangeMarketPrice(e){
        this.setState({
            marketPrice: e.target.value
        });
    }
    onChangeOrderId(e){
        this.setState({
            orderId: e.target.value
        });
    }
    onChangeModelName(e){
        this.setState({
            modelName: e.target.value
        });
    }

 
  

    onSubmit(e){
        e.preventDefault( );

        const Vehicle={
           vehicleId: this.state.vehicleId,
           marketPrice:this.state.marketPrice,
           orderId:this.state.orderId,
           modelName:this.state.modelName,
           
    }

    console.log(Vehicle);


    axios.post('http://localhost:5001/stocks/add',Vehicle)
    .then(res=>console.log(res.data))
    .catch(error=>{
        console.log(error.response);
    })

    console.log("ADDED VEHICLE"); 

    this.setState({
        vehicleId:'',
        marketPrice:'',
        orderId:'',
        modelName:'',
     
    })

//     swal("Add new orderId?")
//     .then((value) => {
//       document.location.reload();
// });


};



 




render() {
    return (
      //adding a modal
    <div className="container">



      <div className="row">
        <div className="col-4 bg-light border pt-5 pb-5  ">
      <h3>Add Vehicles to stock</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
        <label>Vehicle Id</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.vehicleId}
              onChange={this.onChangeVehicleId}
              />  
        </div>


        <div className="form-group"> 
        <label className="form-control-label">Market Price</label>
         <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs.</div>
        
         </div>
          <input 
              type="text" 
              className="form-control"
              value={this.state.marketPrice}
              onChange={this.onChangeMarketPrice}
              />  
              </div>
        </div>

        <div className="form-group"> 
          <label>Order Id </label>
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
          <label>Model Name </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.modelName}
              onChange={this.onChangeModelName}
              />  
         
        </div>

      

                <br></br>


        <div className="form-group">
          <input type="submit" value="Add vehicle" className="btn btn-primary" />
        </div>
      </form>
      </div>
      

      
    
        
      </div>
      </div>
    
    )
  }
}
