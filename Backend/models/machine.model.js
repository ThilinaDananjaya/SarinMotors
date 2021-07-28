const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MachinesSchema = new Schema(
  {
    modelName: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
    fueltype: {
      type: String,
      required: false,
    },
    seats: {
      type: String,
      required: false,
    },
    capacity: {
      type: String,
      required: false,
    },
    year: {
      type: String,
      required: false,
    },
    exteriorColor: {
      type: String,
      required: false,
    },
    vehicleImage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Machines = mongoose.model("Machines", MachinesSchema);

module.exports = Machines;
