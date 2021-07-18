import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert2";

export default class AddOrders extends Component {
  constructor(props) {
    super(props);

    this.onChangeOrderId = this.onChangeOrderId.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePayment = this.onChangePayment.bind(this);
    this.onChangeAgent = this.onChangeAgent.bind(this);
    this.onChangeShipper = this.onChangeShipper.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeCustomer = this.onChangeCustomer.bind(this);
    this.onChangeinsurance = this.onChangeinsurance.bind(this);
    this.onChangeshippingCost = this.onChangeshippingCost.bind(this);
    this.onChangeAgentPayment = this.onChangeAgentPayment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange(this);
    this.onFileUpload = this.onFileUpload(this);

    this.state = {
      orderId: "",
      date: new Date(),
      payment: 0,
      agent: "",
      shipper: "",
      user: "",
      customer: "",
      insurancecost: 0,
      shippingcost: 0,
      agentpayment: 0,
      selectedFile: null,

      agents: [],
      shippers: [],
      customers: [],
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5001/users/").then((Response) => {
      if (Response.data.length > 0) {
        this.setState({
          users: Response.data.map((user) => user.username),
          username: Response.data[0].username,
        });
      }
    });

    axios.get("http://localhost:5001/agents/").then((Response) => {
      if (Response.data.length > 0) {
        this.setState({
          agents: Response.data.map((agent) => agent.agentName),
          agentName: Response.data[0].agentName,
        });
      }
    });

    axios.get("http://localhost:5001/shippers/").then((Response) => {
      if (Response.data.length > 0) {
        this.setState({
          shippers: Response.data.map((shipper) => shipper.shipperName),
          shipperName: Response.data[0].shipperName,
        });
      }
    });
    axios.get("http://localhost:5001/customers/").then((Response) => {
      if (Response.data.length > 0) {
        this.setState({
          customers: Response.data.map((customer) => customer.username),
          username: Response.data[0].username,
        });
      }
    });
  }
  onFileUpload = () => {
    const formData = new FormData();

    formData.append(
      "loc",
      this.setState.selectedFile,
      this.state.selectedFile.name
    );
    axios.post("http://localhost:5001/orders/add", formData);
  };

  onFileChange(e) {
    this.setState(e)({
      selectedFile: e.target.files[0],
    });
  }

  onChangeOrderId(e) {
    this.setState({
      orderId: e.target.value,
    });
  }
  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }
  onChangePayment(e) {
    this.setState({
      payment: e.target.value,
    });
  }

  onChangeinsurance(e) {
    this.setState({
      insurancecost: e.target.value,
    });
  }

  onChangeshippingCost(e) {
    this.setState({
      shippingcost: e.target.value,
    });
  }
  onChangeAgentPayment(e) {
    this.setState({
      agentpayment: e.target.value,
    });
  }
  onChangeAgent(e) {
    this.setState({
      agent: e.target.value,
    });
  }
  onChangeShipper(e) {
    this.setState({
      shipper: e.target.value,
    });
  }

  onChangeUser(e) {
    this.setState({
      user: e.target.value,
    });
  }
  onChangeCustomer(e) {
    this.setState({
      customer: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const order = {
      orderId: this.state.orderId,
      date: this.state.date,
      payment: this.state.payment,
      agent: this.state.agent,
      shipper: this.state.shipper,
      user: this.state.user,
      customer: this.state.customer,
      insurancecost: this.state.insurancecost,
      shippingcost: this.state.shippingcost,
      agentpayment: this.state.agentpayment,
    };

    console.log(order);

    axios
      .post("http://localhost:5001/orders/add", order)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response);
      });

    this.onFileUpload();

    this.setState({
      orderId: "",
      payment: 0,
      agent: "",
      shipper: "",
      user: "",
      customer: "",
      insurancecost: 0,
      shippingcost: 0,
      agentpayment: 0,
    });

    swal("Add new agent?").then((value) => {
      document.location.reload();
    });
  }

  render() {
    return (
      //adding a modal

      <div className="container-fluid">
        <div className="row">
          <div className="col-4 mb-3">
            <button
              type="button"
              className="btn btn-secondary float-right"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              More Info
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Customized Vehicle Orders
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      If the order is placed by a customer put a tick on and
                      select the customer from dropdown.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="row">
              <div className="col-4 mb-3">
                <label for="orderID">Order ID </label>
                <input
                  id="orderID"
                  type="text"
                  className="form-control"
                  value={this.state.orderId}
                  onChange={this.onChangeOrderId}
                />
              </div>

              <div className="col-6 mb-3">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group ">
            <div className="row">
              <div className="col-4 mb-3">
                <label for="pay" className="">
                  Payment
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Rs.</div>
                  </div>
                  <input
                    type="text"
                    id="pay"
                    className="form-control"
                    value={this.state.payment}
                    onChange={this.onChangePayment}
                  />
                </div>
              </div>
              <div className="col-4 mb-3">
                <label for="insurancepay" className="">
                  Insurance Payment
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Rs.</div>
                  </div>
                  <input
                    type="text"
                    id="insurancepay"
                    className="form-control"
                    value={this.state.insurancecost}
                    onChange={this.onChangeinsurance}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group ">
            <div className="row">
              <div className="col-4 mb-3">
                <label>Agent </label>
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  value={this.state.agent}
                  onChange={this.onChangeAgent}
                >
                  {this.state.agents.map(function (agent) {
                    return (
                      <option key={agent} value={agent}>
                        {agent}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-4 mb-3">
                <label for="agentpay" className="">
                  Agent Payment
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Rs.</div>
                  </div>
                  <input
                    type="text"
                    id="agentpay"
                    className="form-control"
                    value={this.state.agentpayment}
                    onChange={this.onChangeAgentPayment}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group ">
            <div className="row">
              <div className="col-4 mb-3">
                <label>Shipper </label>
                <select
                  ref="userInput"
                  required
                  className="form-control"
                  value={this.state.shipper}
                  onChange={this.onChangeShipper}
                >
                  {this.state.shippers.map(function (shipper) {
                    return (
                      <option key={shipper} value={shipper}>
                        {shipper}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-4 mb-3">
                <label for="shipperpay" className="">
                  Shipping Payment
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Rs.</div>
                  </div>
                  <input
                    type="text"
                    id="shipperpay"
                    className="form-control"
                    value={this.state.shippingcost}
                    onChange={this.onChangeshippingCost}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group col-4 mb-3">
            <label>Manager </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.user}
              onChange={this.onChangeUser}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group col-4 mb-3">
            <label>Customer </label>
            <div className="input-group">
              <select
                ref="userInput"
                id="mytext"
                className="form-control"
                value={this.state.customer}
                onChange={this.onChangeCustomer}
              >
                {this.state.customers.map(function (customer) {
                  return (
                    <option key={customer} value={customer}>
                      {customer}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="col-4 mb-3">
            <label>Loc</label>
            <input
              type="file"
              filename="loc"
              className="form-control"
              value={this.state.selectedFile}
              onChange={this.onFileChange}
            />
          </div>

          <br></br>

          <div className="form-group mb-3">
            <input
              type="submit"
              value="Create Order"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
