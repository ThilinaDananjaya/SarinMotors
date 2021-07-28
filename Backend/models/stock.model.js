const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema(
  {
    vehicleId: { type: String, required: true },
    modelName: { type: String, required: true },
    marketPrice: { type: Number, required: true },
    orderId: { type: String, required: true },
    color: { type: String, required: true },
    Img: { type: String },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
