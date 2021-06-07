const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StockSchema = new Schema(
  {
    vehicleId: {
      type: String,
      required: true,
    },
    marketPrice: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
