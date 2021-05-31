import React, {Component} from 'react';
import axios from 'axios';


const Agent =props=> (

    <tr>
        <td>{props.agent.agentId}</td>
        <td>{props.agent.agentName}</td>
        
        <td>
         <a className="btn btn-danger" href="#" onClick={()=>{props.deleteAgent(props.agent._id) }}> delete</a> 
            
        </td>
    </tr>
)


export default class AgentList extends Component {
    constructor(props) {
      super(props); 
  
      this.deleteAgent = this.deleteAgent.bind(this)
  
      this.state = {agents: []};
    }
    
    componentDidMount() {
      axios.get('http://localhost:5001/agents/')
        .then(response => {
          this.setState({ agents: response.data })
        })
        .catch((error) => {
          console.log(error); 
        })
    }
    
    deleteAgent(id) {
      axios.delete('http://localhost:5001/agents/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        agents: this.state.agents.filter(el => el._id !== id)
      })
    }
  agentsList(){
      return this.state.agents.map(currentagent=>{
          return <Agent agent={currentagent} deleteAgent={this.deleteAgent} key={currentagent._id}/>

      })
  } 

render(){
    return (
        <div className="container border rounded border-warning pt-5 pb-5">
          <div className="pl-2">
        <h3 className="text-primary">Agents</h3><br></br>
        </div>
        <div>
        <table className="table table-boarded">
          <thead className="thead-light">
            <tr className="table-primary">
              <th>Agent ID</th>
              <th>Agent Name</th>

              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            { this.agentsList() } 
          </tbody>
        </table>
        </div>
      </div>
    
    )
}
}
