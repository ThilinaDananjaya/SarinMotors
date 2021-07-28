const router = require("express").Router();
let Stock = require("../models/stock.model");

var multer = require("multer");
const { request } = require("express");

//define storage for the images
var storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, "./images");
  },

  //addback extension

  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

router.route("/").get((req, res) => {
  Stock.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add", upload.single("image")).post(async (req, res) => {
  console.log(request.file);
  const vehicleId = req.body.vehicleId;
  const modelName = req.body.modelName;
  const marketPrice = Number(req.body.marketPrice);
  const orderId = req.body.orderId;
  const color = req.body.color;
  const img = request.file.filename;

  const newStock = new Stock({
    vehicleId,
    modelName,
    marketPrice,
    orderId,
    color,
    img,
  });

  newStock
    .save()
    .then(() => res.json("Stock added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Stock.findById(req, params.id)
    .then((stock) => res.json(stock))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  Stock.findByIdAndDelete(req.params.id)
    .then(() => res.json("Stock deleted."))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/update/:id").post((req, res) => {
  Stock.findById(req, params.id)
    .then((stock) => {
      stock.vehicleId = req.body.vehicleId;
      stock.modelName = req.body.modelName;
      stock.marketPrice = Number(req.body.marketPrice);
      stock.orderId = req.body.orderId;
      stock.color = req.body.color;

      stock
        .save()
        .then(() => res.json("stock updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
