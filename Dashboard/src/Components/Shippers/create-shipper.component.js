import React, { useState } from "react";

//send http request to backend (connect to backend)
import axios from "axios";

const CreateShipper = () => {
  const [shipperId, setShipperId] = useState("");
  const [shipperName, setShipperName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [filename, setFilename] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("shipperId", shipperId);
    formData.append("shipperName", shipperName);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("photo", filename);

    axios
      .post("http://localhost:5001/shippers/add", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={changeonClick} encType="multipart/form-data">
      <div className="form-group">
        <label>Shipper Id</label>
        <input
          type="text"
          required
          className="form-control mb-3"
          value={shipperId}
          onChange={(e) => setShipperId(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Shipper Name</label>
        <input
          type="text"
          required
          className="form-control mb-3"
          value={shipperName}
          onChange={(e) => setShipperName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email </label>
        <input
          type="text"
          required
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Mobile </label>
        <input
          type="text"
          required
          className="form-control mb-3"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Photo </label>
        <input
          type="file"
          filename="photo"
          className="form-control-file mb-3"
          onChange={onChangeFile}
        />
      </div>
      <br></br>

      <div className="form-group mb-3">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default CreateShipper;
