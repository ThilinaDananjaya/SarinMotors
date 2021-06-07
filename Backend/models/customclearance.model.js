const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customClearanceSchema = new Schema(
  {
    orderId: { type: String, required: true },
    customPayment: { type: Number, required: true },
    transportPayment: { type: Number, required: true },
    user: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const CustomClearance = mongoose.model(
  "CustomClearance",
  customClearanceSchema
);

module.exports = CustomClearance;
