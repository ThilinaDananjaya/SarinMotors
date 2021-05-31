
import React, {Component} from 'react';
import ShipperList from "./shipper-list.component";
//send http request to backend (connect to backend)
import axios from 'axios';

export default class CreateShipper extends Component{

    constructor(props){
        super(props);

        //hard coding a single user

       


        //binding this keyword to class
        
        this.onChangeShipperId=this.onChangeShipperId.bind(this);
        this.onChangeShipperName=this.onChangeShipperName.bind(this);

        this.onSubmit=this.onSubmit.bind(this);



        this.state={
            shipperId: '',
            shipperName:''



        }

        
    }

    onChangeShipperId(e){
        this.setState({
            shipperId:e.target.value
        })
    };

    onChangeShipperName(e){
        this.setState({
            shipperName:e.target.value
        })
    };


    onSubmit(e){
        e.preventDefault();

        const shipper = {
            shipperId:this.state.shipperId,
            shipperName:this.state.shipperName
           
        }
        console.log(shipper);

        axios.post('http://localhost:5001/shippers/add',shipper)
        .then(res=>console.log(res.data));

        this.setState({
            shipperId:'',
            shipperName:''
        })

        
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4 pb-5 pt-5 border rounded border-primary">
            <h3>Add Shipper</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Agent Id : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.shipperId}
                    onChange={this.onChangeShipperId}
                    />
              </div>

              <div className="form-group"> 
                <label>Shipper Name : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.shipperName}
                    onChange={this.onChangeShipperName}
                    />
              </div>
            <br></br>
              


              <div className="form-group"> 
                <input type="submit" value="Create Shipper" className="btn btn-primary" />
              </div>
            </form>
            </div>

            <div className="col-8">
            
               <ShipperList/>
            </div>
          </div>
          </div>
        )
    }
}