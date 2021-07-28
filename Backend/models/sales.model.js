const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const saleSchema = new Schema(
  {
    saleNo: { type: String, required: true, unique: true },
    regiNo: { type: String, required: false, unique: false },
    paymentMethod: { type: String, required: false, unique: false },
    modelName: { type: String, required: false, unique: false },
    customer: { type: String, required: false, unique: false },
    user: { type: String, required: false, unique: false },
    date: { type: Date, required: false, unique: false },
    payment: { type: Number, required: false, unique: false },
    luxuryTaxes: { type: Number, required: false, unique: false },

    MTA: { type: String, required: false, unique: false },
  },
  {
    timestamps: true,
  }
);

const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;
