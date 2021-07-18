import React, { useState } from "react";
//send http request to backend (connect to backend)
import axios from "axios";
//alert
import Swal from "sweetalert2";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select } from "@material-ui/core";

const CreateEmployee = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAdress] = useState("");
  const [homePhone, setHomephone] = useState("");
  const [marriedState, setMarriedStatus] = useState("");
  const [dob, setDOB] = useState(new Date());
  const [startDate, setStartdate] = useState(new Date());
  const [empType, setEmptype] = useState("");
  const [gender, setGender] = useState("");
  const [bank, setBank] = useState("");
  const [accountNo, setAccountno] = useState("");
  const [position, setPosition] = useState("");
  const [qualification, setQualification] = useState("");

  const [filename, setFilename] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
  };

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
    formData.append("address", address);
    formData.append("homePhone", homePhone);
    formData.append("marriedState", marriedState);
    formData.append("dob", dob);
    formData.append("startDate", startDate);
    formData.append("empType", empType);
    formData.append("gender", gender);
    formData.append("bank", bank);
    formData.append("accountNo", accountNo);
    formData.append("position", position);
    formData.append("qualification", qualification);
    formData.append("employeeImage", filename);

    axios
      .post("http://localhost:5001/users/add", formData)
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
    setEmail("");
    setAdress("");
    setHomephone("");
    setMarriedStatus("");
  };

  return (
    <form onSubmit={changeonClick} encType="multipart/form-data">
      <div className="form-group mb-3">
        <label>User Name </label>
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
        <label>Address </label>
        <input
          type="text"
          required
          className="form-control"
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Homephone </label>
        <input
          type="text"
          required
          className="form-control"
          value={homePhone}
          onChange={(e) => setHomephone(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Married Status </label>
        <Select
          className="form-control"
          value={marriedState}
          onChange={(e) => setMarriedStatus(e.target.value)}
        >
          <option value="married">Married</option>
          <option value="unmarried">Unmarried</option>
        </Select>
      </div>

      <div className="form-group mb-3">
        <label>Date of Birth</label>
        <div>
          <DatePicker selected={dob} onChange={(date) => setDOB(date)} />
        </div>
      </div>

      <div className="form-group mb-3">
        <label>Start Date</label>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartdate(date)}
          />
        </div>
      </div>

      <div className="form-group mb-3">
        <label>Employee Type </label>
        <Select
          value={empType}
          className="form-control"
          onChange={(e) => setEmptype(e.target.value)}
        >
          <option value="Full time">Full Time</option>
          <option value="Part Time">Part time</option>
          <option value="Intern">Intern</option>
        </Select>
      </div>
      <div className="form-group mb-3">
        <input
          type="radio"
          value="male"
          id="male"
          className="form-check-input"
          onChange={handleChange}
          name="gender"
        />
        <label for="male">Male</label>

        <input
          type="radio"
          value="female"
          id="female"
          className="form-check-input"
          onChange={handleChange}
          name="gender"
        />
        <label for="female">Female</label>
      </div>

      <div className="form-group mb-3">
        <label>bank </label>
        <input
          type="text"
          required
          className="form-control"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Account No </label>
        <input
          type="text"
          required
          className="form-control"
          value={accountNo}
          onChange={(e) => setAccountno(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Position </label>
        <Select
          className="form-control"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="Manager">Manager</option>
          <option value="SalesPerson">SalesPerson</option>
        </Select>
      </div>

      <div className="form-group mb-3">
        <label>qualifications </label>
        <textarea
          className="form-control"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="file">Employee Image </label>
        <input
          type="file"
          className="form-control-file"
          onChange={onChangeFile}
          filename="employeeImage"
        />
      </div>

      <br></br>

      <div className="form-group mb-3">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default CreateEmployee;
