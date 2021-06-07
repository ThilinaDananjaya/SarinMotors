import React, {Component} from 'react';
import axios from 'axios';


const UserType =props=> (

    <tr>
        <td>{props.usertype.usertypeId}</td>
        <td>{props.usertype.usertypeName}</td>
        
        <td>
         <a className="btn btn-danger" href="#" onClick={()=>{props.deleteUserType(props.usertype._id) }}> delete</a> 
            
        </td>
    </tr>
)


export default class UserTypesList extends Component {
    constructor(props) {
      super(props); 
  
      this.deleteUserType = this.deleteUserType.bind(this)
  
      this.state = {usertypes: []};
    }
    
    componentDidMount() {
      axios.get('http://localhost:5001/usertypes/')
        .then(response => {
          this.setState({ usertypes: response.data })
        })
        .catch((error) => {
          console.log(error); 
        })
    }
    
    deleteUserType(id) {
      axios.delete('http://localhost:5001/usertypes/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        usertypes: this.state.usertypes.filter(el => el._id !== id)
      })
    }
  userTypesList(){
      return this.state.usertypes.map(currentusertype=>{
          return <UserType usertype={currentusertype} deleteUserType={this.deleteUserType} key={currentusertype._id}/>

      })
  } 

render(){
    return (
      <div className="container pt-5 pb-5">
        <div className="pl-2">
        <h3>User Types</h3>
        </div>
        <div>
        <table className="table table-boarded table-striped table-dark">
          <thead className="thead-light">
            <tr className="">
              <th>Usertype ID</th>
              <th>User type name</th>

              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            { this.userTypesList() } 
          </tbody>
        </table>
      </div>
      </div>
      
    
    )
}
}
