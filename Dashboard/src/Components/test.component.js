import React, { useState, useEffect } from "react";
//send http request to backend (connect to backend)
import axios from "axios";
//alert
import Swal from "sweetalert2";

const CreateTest = () => {
  const [testname, setTestname] = useState("");
  const [filename, setFilename] = useState("");
  const [filenam, setFilenam] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const onChangeFil = (e) => {
    setFilenam(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("testname", testname);
    formData.append("picone", filename);
    formData.append("pictwo", filenam);

    axios
      .post("http://localhost:5001/tests/add", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={changeonClick} encType="multipart/form-data">
      <div className="form-group mb-3">
        <label>Agent ID : </label>
        <input
          type="text"
          required
          className="form-control"
          value={testname}
          onChange={(e) => setTestname(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="file">Pic one </label>
        <input
          type="file"
          className="form-control-file"
          onChange={onChangeFile}
          filename="picone"
        />
      </div>

      <div className="form-group mb-3">
        <label>Pic two </label>
        <input
          type="file"
          className="form-control-file"
          onChange={onChangeFil}
          filename="pictwo"
        />
      </div>

      <br></br>

      <div className="form-group mb-3">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default CreateTest;
