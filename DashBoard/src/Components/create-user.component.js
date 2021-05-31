import React, {Component} from 'react';

import axios from 'axios';

export default class CreateUser extends Component{

    constructor(props){
        super(props);

        //hard coding a single user

       


        //binding this keyword to class
        
        this.onChange=this.onChangeUsertypeId.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeUsertypeId=this.onChangeUsertypeId.bind(this);



        this.state={
            usertypeId:'',
            username:'',
            password : '',
            usertypes:[]


        }

        
    }
    componentDidMount(){

            axios.get('http://localhost:5001/usertypes/')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        usertypes:response.data.map(usertype=>usertype.usertypeId),
                        usertypeId:response.data[0].usertypeId
                    })
                }
            })


    

    }

    onChangeUsertypeId(e){
        this.setState({
            usertypeId:e.target.value
        })
    };

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        })
    };

    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    };

    onSubmit(e){
        e.preventDefault();

        const user = {
            usertypeId:this.state.usertypeId,
            username:this.state.username,
            password:this.state.password
        }
        console.log(user);

        //adding data to the backend

        axios.post('http://localhost:5001/users/add',user)
        .then(res=>console.log(res.data));

        //when click submit button window will go to userslist view

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                <div className="border border-rounded border-primary">
               
            <h3>Create a User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>User Type ID : </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.usertypeId}
                    onChange={this.onChangeUsertypeId}>
                    {
                      this.state.usertypes.map(function(usertype) {
                        return  <option 
                          key={usertype}
                          value={usertype}>{usertype}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>User Name :  </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group">
                <label>Password </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    />
              </div>
             
      
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
            </div>
            
            </div>

          </div>
        )
    }
}





