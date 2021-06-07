const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    orderId: { type: String, required: true },
    date: { type: Date, required: true },
    payment: { type: Number, required: true },
    agent: { type: String, required: true },
    shipper: { type: String, required: true },
    user: { type: String, required: true },
    customer: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
