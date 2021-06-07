
import React, {Component} from 'react';
import AgentList from "./agent-list.component";
//send http request to backend (connect to backend)
import axios from 'axios';

//alert
import swal from 'sweetalert';

export default class CreateAgent extends Component{

    constructor(props){
        super(props);

        //hard coding a single user

          


        //binding this keyword to class
        
        this.onChangeAgentId=this.onChangeAgentId.bind(this);
        this.onChangeAgentName=this.onChangeAgentName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangeMobile=this.onChangeMobile.bind(this);

        this.onSubmit=this.onSubmit.bind(this);



        this.state={
            agentId: '',
            agentName:'',
            email:'',
            mobile:''



        }

        
    }

    makeAlert(){
        <div class="alert alert-success">
        <strong>Success!</strong> This alert box could indicate a successful or positive action.
      </div>
    }
    
    
      
    

    onChangeAgentId(e){
        this.setState({
            agentId:e.target.value
        })
    };

    onChangeAgentName(e){
        this.setState({
            agentName:e.target.value
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

        const agent = {
            agentId:this.state.agentId,
            agentName:this.state.agentName,
            email:this.state.email,
            mobile:this.state.mobile
        }
        console.log(agent);

        axios.post('http://localhost:5001/agents/add',agent)
        .then(res=>console.log(res.data));

        this.setState({
            agentId:'',
            agentName:'',
            email:'',
            mobile:''
        })
        //refresh page and give a alert
        swal("Add new agent?")
        .then((value) => {
          document.location.reload();
});
        
        // document.AgentList.reload()
        
    
        // swal("Done!", "You added a agent!", "success");

        
        //refresh the page 
      
        
          

        
    }

    render(){
        return(
            <div className="container">
                <div className="row">
            <div className="col-4 bg-light pb-5 pt-5 border">
                
            <h3 className="text-primary">Add Agent</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>User type ID : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.agentId}
                    onChange={this.onChangeAgentId}
                    />
              </div>

              <div className="form-group"> 
                <label>Agent Name : </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.agentName}
                    onChange={this.onChangeAgentName}
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
                <input type="submit"  value="Create Agent" className="btn btn-primary" />
              </div>
            </form>

            </div>
 
            <div className="col-8 bg-light">
            
               <AgentList/>
            </div>
            </div>
          </div>
        )
    }
}