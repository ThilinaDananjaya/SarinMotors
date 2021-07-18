import React, { useState } from "react";
//send http request to backend (connect to backend)
import axios from "axios";
//alert
import Swal from "sweetalert2";

const CreateAgent = () => {
  const [agentId, setAgentId] = useState("");
  const [agentName, setAgentName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [filename, setFilename] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("agentId", agentId);
    formData.append("agentName", agentName);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("company", company);
    formData.append("agentImage", filename);

    axios
      .post("http://localhost:5001/agents/add", formData)
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

    setAgentName("");
    setAgentId("");
    setCompany("");
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
          value={agentId}
          onChange={(e) => setAgentId(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Agent Name : </label>
        <input
          type="text"
          required
          className="form-control"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Agent Company</label>
        <select
          required
          className="form-control"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option>AUTO SUPPLY JAPAN</option>
          <option>KOYO TRADING</option>
          <option>JAPAN CAR DIRECT LLC</option>
          <option>JAPAN TRADING</option>
        </select>
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
        <label htmlFor="file">Image </label>
        <input
          type="file"
          className="form-control-file"
          onChange={onChangeFile}
          filename="agentImage"
        />
      </div>

      <br></br>

      <div className="form-group mb-3">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default CreateAgent;
