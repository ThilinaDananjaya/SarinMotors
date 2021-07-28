import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CreateVehicle = () => {
  const [modelName, setModelname] = useState("");
  const [company, setCompany] = useState("");
  const [fueltype, setFueltype] = useState("");
  const [seats, setSeats] = useState("");
  const [capacity, setCapacity] = useState("");
  const [bodyStyle, setBodyStyle] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [exteriorColor, setExterior] = useState("");
  const [interiorColor, setInterior] = useState("");
  const [filename, setFilename] = useState("");

  const onChangeFile = (e) => {
    setFilename(e.target.files[0]);
  };

  const changeonClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("modelName", modelName);
    formData.append("company", company);
    formData.append("fueltype", fueltype);
    formData.append("seats", seats);
    formData.append("capacity", capacity);
    formData.append("bodyStyle", bodyStyle);
    formData.append("year", year);
    formData.append("mileage", mileage);
    formData.append("exteriorColor", exteriorColor);
    formData.append("interiorColor", interiorColor);
    formData.append("vehicleImage", filename);

    axios
      .post("http://localhost:5001/vehicles/add", formData)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Vehicle Saved",
      showConfirmButton: false,
      timer: 1500,
    });

    setModelname("");
    setFueltype("");
    setSeats("");
    setCapacity("");
    setCompany("");
    setBodyStyle("");
    setYear("");
    setMileage("");
    setExterior("");
    setInterior("");
    setFilename("");
  };

  return (
    <form onSubmit={changeonClick} encType="multipart/form-data">
      <div className="form-group mb-3">
        <label>Model Name :</label>
        <input
          required
          type="text"
          className="form-control"
          value={modelName}
          onChange={(e) => setModelname(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Company :</label>
        <select
          required
          className="form-control"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        >
          <option>Toyota</option>
          <option>Honda</option>
          <option>Suzuki</option>
          <option>Kia</option>
          <option>Audi</option>
          <option>BMW</option>
        </select>
      </div>

      <div className="form-group mb-3">
        <label>Fuel type </label>
        <select
          type="text"
          className="form-control"
          value={fueltype}
          onChange={(e) => setFueltype(e.target.value)}
        >
          <option value="Diesel">Diesel</option>
          <option value="Petrol">Petrol</option>
        </select>
      </div>
      <div className="form-group mb-3">
        <label>Seats </label>
        <input
          type="text"
          className="form-control"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label>Capacity</label>
        <input
          type="text"
          className="form-control"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Body Style :</label>
        <select
          required
          className="form-control"
          value={bodyStyle}
          onChange={(e) => setBodyStyle(e.target.value)}
        >
          <option>SEDAN</option>
          <option>SUV</option>
          <option>COUPE</option>
          <option>HATCHBACK</option>
          <option>CONVERTIBLE</option>
          <option>SPORT</option>
        </select>
      </div>

      <div className="form-group mb-3">
        <label>Year :</label>
        <input
          type="text"
          className="form-control"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Mileage :</label>
        <input
          type="text"
          className="form-control"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label>Exterior Color :</label>
        <select
          required
          className="form-control"
          value={exteriorColor}
          onChange={(e) => setExterior(e.target.value)}
        >
          <option>Black</option>
          <option>White</option>
          <option>Silver Grey</option>
          <option>Cream</option>
          <option>Titanium</option>
          <option>Grey</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group mb-3">
        <label>Interior Color :</label>
        <select
          required
          className="form-control"
          value={interiorColor}
          onChange={(e) => setInterior(e.target.value)}
        >
          <option>Black</option>
          <option>White</option>
          <option>Silver Grey</option>
          <option>Titanium</option>
          <option>Grey</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="file">Vehicle Image </label>
        <input
          type="file"
          className="form-control-file"
          onChange={onChangeFile}
          filename="vehicleImage"
        />
      </div>

      <br></br>

      <div className="form-group mb-3">
        <input type="submit" value="Submit" className="btn btn-primary" />
      </div>
    </form>
  );
};

export default CreateVehicle;
