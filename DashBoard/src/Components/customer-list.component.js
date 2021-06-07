import React, { Component } from 'react';
import axios from 'axios';

const Customer = props => (
  <tr>
    <td>{props.customer.username}</td>
  
    <td>{props.customer.email}</td>
    <td>{props.customer.mobile}</td>
    <td>{props.customer.dob.substring(0,10)}</td>
    <td>
       <a className="btn btn-danger" href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a> 
    </td>
  </tr>
)

export default class CustomersList extends Component {
  constructor(props) {
    super(props); 

    this.deleteCustomer = this.deleteCustomer.bind(this)

    this.state = {customers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/customers/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error); 
      })
  }
  

  deleteCustomer(id) {
    axios.delete('http://localhost:5001/customers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }

  customersList() {
    return this.state.customers.map(currentcustomer => {
      return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id}/>;
    })
  }

  render() {
    return (
      <div className="">
        <h3>Customers List</h3>
        <table className="table table-striped table-dark table-boarded">
          <thead className="thead-light">
            <tr>
              <th>Customer name</th>
            
              <th>Email</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.customersList() }
          </tbody>
        </table>
      </div>
    )
  }
}