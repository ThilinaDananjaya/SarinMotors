
import React, {Component} from 'react';
import AgentList from "./agent-list.component";
//send http request to backend (connect to backend)
import axios from 'axios';

export default class CreateAgent extends Component{

    constructor(props){
        super(props);

        //hard coding a single user

       


        //binding this keyword to class
        
        this.onChangeAgentId=this.onChangeAgentId.bind(this);
        this.onChangeAgentName=this.onChangeAgentName.bind(this);

        this.onSubmit=this.onSubmit.bind(this);



        this.state={
            agentId: '',
            agentName:''



        }

        
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

   


    onSubmit(e){
        e.preventDefault();

        const agent = {
            agentId:this.state.agentId,
            agentName:this.state.agentName
           
        }
        console.log(agent);

        axios.post('http://localhost:5001/agents/add',agent)
        .then(res=>console.log(res.data));

        this.setState({
            agentId:'',
            agentName:''
        })

        
            window.location.reload(false);
          

        
    }

    render(){
        return(
            <div className="container">
                <div className="row">
            <div className="col-4  pb-5 pt-5 border rounded border-primary">
                
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

            <br></br>
              


              <div className="form-group"> 
                <input type="submit"  value="Create Agent" className="btn btn-primary" />
              </div>
            </form>

            </div>

            <div className="col-8">
            
               <AgentList/>
            </div>
            </div>
          </div>
        )
    }
}