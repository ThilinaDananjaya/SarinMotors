const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
  {
    modelName: { type: String, required: true },
    company: { type: String, required: true },
    fueltype: { type: String, required: true },
    seats: { type: String, required: true },
    capacity: { type: String, required: true },
    bodyStyle: { type: String, required: true },
    year: { type: String, required: true },
    mileage: { type: String, required: true },
    exteriorColor: { type: String, required: true },
    interiorColor: { type: String, required: true },
    vehicleImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
