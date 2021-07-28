const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema(
  {
    testname: {
      type: String,
      required: true,
    },
    picone: {
      type: String,
      required: false,
    },
    pictwo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
