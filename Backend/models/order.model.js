const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    orderId: { type: String, required: true },
    date: { type: Date, required: true },
    payment: { type: Number, required: true },
    agent: { type: String, required: true },
    shipper: { type: String, required: true },
    user: { type: String, required: false },
    customer: { type: String, required: false },
    insuranceCost: { type: Number, required: true },
    shippingCost: { type: Number, required: true },
    agentPayment: { type: Number, required: true },
    auctionSheetid: { type: String, required: false },
    auctionSheet: { type: String, required: false },
    invoiceNumber: { type: String, required: false },
    bank: { type: String, required: false },
    bankEmail: { type: String, required: false },
    locNum: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
