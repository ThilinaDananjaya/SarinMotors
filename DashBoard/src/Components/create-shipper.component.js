
import React, {Component} from 'react';
import ShipperList from "./shipper-list.component";
//send http request to backend (connect to backend)
import axios from 'axios';
import swal from "sweetalert";

export default class CreateShipper extends Component{

    constructor(props){
        super(props);

        //hard coding a single user

       


        //binding this keyword to class
        
        this.onChangeShipperId=this.onChangeShipperId.bind(this);
        this.onChangeShipperName=this.onChangeShipperName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeMobile=this.onChangeMobile.bind(this);
        this.onSubmit=this.onSubmit.bind(this);



        this.state={
            shipperId: '',
            shipperName:'',
            email:'',
            mobile:''



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
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    };
    onChangeMobile(e){
        this.setState({
            mobile:e.target.value
        })
    };



    onSubmit(e){
        e.preventDefault();

        const shipper = {
            shipperId:this.state.shipperId,
            shipperName:this.state.shipperName,
            email:this.state.email,
            mobile:this.state.mobile
           
        }
        console.log(shipper);

        axios.post('http://localhost:5001/shippers/add',shipper)
        .then(res=>console.log(res.data));

        this.setState({
            shipperId:'',
            shipperName:''
        })
        swal("Add new shipper?")
        .then((value) => {
          document.location.reload();
});

        
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4 pb-5 pt-5 border bg-light">
            <h3>Add Shipper</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Shipper Id : </label>
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
              
              <div className="form-group"> 
                <label>Email </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
              </div>

              <div className="form-group"> 
                <label>Mobile </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.agentMobile}
                    onChange={this.onChangeMobile}
                    />
              </div>
            <br></br>
              


              <div className="form-group"> 
                <input type="submit" value="Create Shipper" className="btn btn-primary" />
              </div>
            </form>
            </div>

            <div className="col-8 border bg-light">
            
               <ShipperList/>
            </div>
          </div>
          </div>
        )
    }
}