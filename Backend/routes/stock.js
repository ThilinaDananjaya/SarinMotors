const router = require("express").Router();
let Stock = require("../models/vehiclestock.model");

router.route("/").get((req, res) => {
  Stock.find()
    .then((stocks) => res.json(stocks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const vehilceId = req.body.vehilceId;
  const marketPrice = Number(req.body.marketPrice);
  const orderId = req.body.orderId;
  const modelName = req.body.modelName;

  const newStock = new Stock({
    vehilceId,
    marketPrice,
    orderId,
    modelName,
  });

  newStock
    .save()
    .then(() => res.json("Stock added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Stock.findById(req, params.id)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  Stock.findByIdAndDelete(req.params.id)
    .then(() => res.json("Stock deleted."))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/update/:id").post((req, res) => {
  Stock.findById(req, params.id)
    .then((order) => {
      order.vehilceId = req.body.vehilceId;
      order.marketPrice = Number(req.body.marketPrice);
      order.orderId = req.body.orderId;
      order.modelName = req.body.modelName;

      order
        .save()
        .then(() => res.json("order updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
