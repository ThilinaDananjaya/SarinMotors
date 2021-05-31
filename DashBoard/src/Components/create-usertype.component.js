
import React, {Component} from 'react';
import UserTypesList from "./usertype-list.component";
//send http request to backend (connect to backend)
import axios from 'axios';
//importing create user and view user
import CreateUser from './create-user.component';
import UsersList from './user-list.component';
export default class CreateUserType extends Component{

    constructor(props){
        super(props);

        //hard coding a single user

       


        //binding this keyword to class
        
        this.onChangeUsertypeId=this.onChangeUsertypeId.bind(this);
        this.onChangeUsertypeName=this.onChangeUsertypeName.bind(this);

        this.onSubmit=this.onSubmit.bind(this);



        this.state={
            usertypeId: '',
            usertypeName:''



        }

        
    }

    onChangeUsertypeId(e){
        this.setState({
            usertypeId:e.target.value
        })
    };

    onChangeUsertypeName(e){
        this.setState({
            usertypeName:e.target.value
        })
    };


    onSubmit(e){
        e.preventDefault();

        const usertype = {
            usertypeId:this.state.usertypeId,
            usertypeName:this.state.usertypeName
           
        }
        console.log(usertype);

        axios.post('http://localhost:5001/usertypes/add',usertype)
        .then(res=>console.log(res.data));

        this.setState({
            usertypeId:'',
            usertypeName:''
        })

        
    }

    render(){
        return(
            <div className="container">


                <div className="row">
                <div className="col-3 pb-5 pt-5 border rounded border-primary"> 
            <h3 className="text-primary">Add UserTypes</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>User type ID : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.usertypeId}
                    onChange={this.onChangeUsertypeId}
                    />
              </div>

              <div className="form-group"> 
                <label>User type name : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.usertypeName}
                    onChange={this.onChangeUsertypeName}
                    />
              </div>
            <br></br>
              


              <div className="form-group"> 
                <input type="submit" value="Create Usertype" className="btn btn-primary" />
              </div>
            </form>

            </div>

            <div className="col-6">
                
                <UserTypesList/>
            </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-4">
            <CreateUser/>
                </div>
                <div className="col-8">
            <UsersList/>
                </div>

            </div>
          </div>
          
        )
    }
}