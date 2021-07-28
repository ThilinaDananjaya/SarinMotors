import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import Swal from 'sweetalert2';

const CreateSales = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/vehicles/")
      .then((res) => setVehicles(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/customers/")
      .then((res) => setCustomers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/users/")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [saleNo, setSaleno] = useState("");
  const [regiNo, setRegino] = useState("");
  const [paymentMethod, setPaymentmethod] = useState("");
  const [modelName, setModelname] = useState(0);
  const [customer, setCustomer] = useState(0);
  const [user, setUser] = useState(0);
  const [date, setDate] = useState(new Date());
  const [payment, setPayment] = useState(0);
  const [luxuryTaxes, SetLuxurytax] = useState("");

  const [filename, setFilename] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("saleNo", saleNo);
    formData.append("regiNo", regiNo);
    formData.append("paymentMethod", paymentMethod);
    formData.append("date", date);
    formData.append("modelName", modelName);
    formData.append("customer", customer);
    formData.append("user", user);
    formData.append("payment", payment);
    formData.append("luxuryTaxes", luxuryTaxes);
    formData.append("MTA", filename);

    axios
      .post("http://localhost:5001/sales/add", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Order Saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  };

  return (
    <form onSubmit={changeonClick} encType="multipart/form-data">
      <h3 className="text-white mb-4">Add Sale Info</h3>

      <div className="form-row">
        <div className="row">
          <div className="col-6 mb-3">
            <label>Sale Number </label>

            <input
              type="text"
              id="pay"
              className="form-control"
              value={saleNo}
              onChange={(e) => setSaleno(e.target.value)}
            />
          </div>

          <div className="col-6 mb-3">
            <label>Register Number</label>

            <input
              type="text"
              className="form-control"
              value={regiNo}
              onChange={(e) => setRegino(e.target.value)}
            />
          </div>
          <div className="col-6 mb-3">
            <label>Payment Method</label>

            <select
              required
              className="form-control"
              value={paymentMethod}
              onChange={(e) => setPaymentmethod(e.target.value)}
            >
              <option>Cash</option>
              <option>Debit Card</option>
              <option>Credit Card</option>
              <option>Checque</option>
            </select>
          </div>

          <div className="col-6 mb-3">
            <label>Customer </label>

            <select
              required
              className="form-control"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            >
              {customers.map((customer, key) => (
                <option key={key}>{customer.username}</option>
              ))}
            </select>
          </div>

          <div className="col-6 mb-3">
            <label>Manager</label>

            <select
              required
              className="form-control"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            >
              {users.map((user, key) => (
                <option key={key}>{user.username}</option>
              ))}
            </select>
          </div>

          <div className="col-6 mb-3">
            <label>Vehicle Model </label>

            <select
              required
              className="form-control"
              value={modelName}
              onChange={(e) => setModelname(e.target.value)}
            >
              {vehicles.map((vehicle, key) => (
                <option key={key}>{vehicle.modelName}</option>
              ))}
            </select>
          </div>

          <div className="col-6 mb-3">
            <label>Date </label>
            <div>
              <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group bg-secondary p-2 mb-3 rounded text-white">
        <div className="row">
          <div className="col-6 mb-3">
            <label htmlFor="pay" className="">
              Total Taxes
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">Rs.</div>
              </div>
              <input
                type="text"
                id="pay"
                className="form-control"
                value={luxuryTaxes}
                onChange={(e) => SetLuxurytax(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6 mb-3">
            <label htmlFor="insurancepay" className="">
              Car Sale Prize
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">Rs.</div>
              </div>
              <input
                type="text"
                id="insurancepay"
                className="form-control"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-6 mb-3">
        <label>MTA6 </label>
        <input
          type="file"
          className="form-control-file"
          filename="MTA"
          onChange={onChangeFile}
        />
      </div>

      {/* <div className="col-6 mb-3"> 
        <label>MTA8 </label>
          <input 
              type="file" 
              className="form-control-file"
              

              />  
        </div>
 
        <div className="col-6 mb-3"> 
        <label>Marriage Certificate </label>
          <input 
              type="file" 
              className="form-control-file"
        
    
              />  
        </div> 
 

 */}

      <br></br>

      <div className="form-group mb-3">
        <input type="submit" value="Submit" className="ml-5 btn btn-primary" />
      </div>
    </form>
  );
};
export default CreateSales;
