import React, { useState } from "react";
//send http request to backend (connect to backend)
import axios from "axios";
//alert
import Swal from "sweetalert2";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateCustomer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDOB] = useState(new Date());
  const [filename, setFilename] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("dob", dob);
    formData.append("customerImage", filename);

    axios
      .post("http://localhost:5001/customers/add", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agent Saved",
      showConfirmButton: false,
      timer: 1500,
    });

    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
    setFilename("");
  };

  return (
    <form onSubmit={changeonClick} encType="multipart/form-data">
      <div className="form-group mb-3">
        <label>Agent ID : </label>
        <input
          type="text"
          required
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Password : </label>
        <input
          type="text"
          required
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Email </label>
        <input
          type="text"
          required
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Mobile </label>
        <input
          type="text"
          required
          className="form-control"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Date of Birth</label>
        <div>
          <DatePicker selected={dob} onChange={(date) => setDOB(date)} />
        </div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="file">Image </label>
        <input
          type="file"
          className="form-control-file"
          onChange={onChangeFile}
          filename="customerImage"
        />
      </div>

      <br></br>

      <div className="form-group mb-3">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default CreateCustomer;
