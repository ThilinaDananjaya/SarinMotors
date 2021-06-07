import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";

const CustomClearance = props => (
  <tr>
    <td>{props.customclearance.orderId}</td>
    <td>{props.customclearance.date.substring(0,10)}</td>
    <td>{props.customclearance.customPayment}</td>
    <td>{props.customclearance.transportPayment}</td>
    <td>{props.customclearance.user}</td>


   
    <td>
    
   <a className="btn btn-danger" href="#" onClick={() => {

swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this imaginary file!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    {props.deleteCustomClearance(props.customclearance._id) };
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});
   }}>delete</a> 
    </td>
  </tr>
)

export default class CustomClearanceList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomClearance = this.deleteCustomClearance.bind(this)

    this.state = {customclearances: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5001/customclearances/')
      .then(response => {
        this.setState({ customclearances: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCustomClearance(id) {
    axios.delete('http://localhost:5001/customclearances/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customclearances: this.state.customclearances.filter(el => el._id !== id)
    })
  }

  receivingsList() {
    return this.state.customclearances.map(currentcustomclearance => {
      return <CustomClearance customclearance={currentcustomclearance} deleteCustomClearance={this.deleteCustomClearance} key={currentcustomclearance._id}/>;
    })
  }

  render() {
    return (
      <div className="container border  pt-5 pb-5">
        <h3>Vehicle Receivings</h3>
        <table className="table table-striped table-dark table-boarded">
          <thead className="thead-light">
            <tr>
              <th>CustomClearance ID</th>
              <th>Date</th>
              <th>Custom Clearance Payment</th>
              <th>Tavel payments</th>
              <th>Sales Person</th>
              <th>Actions</th>
            
            </tr>
          </thead>
          <tbody>
            { this.receivingsList() }
          </tbody>
        </table>
      </div>
    )
  }
}