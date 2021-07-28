const router = require("express").Router();
//require shipper model
let Sale = require("../models/sales.model");

//image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./../Dashboard/public/sales/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//first endpoint

router.route("/").get((req, res) => {
  Sale.find()
    .then((sales) => res.json(sales))
    .catch((err) => res.status(400).json("Error: " + err));
});

//findbyid

router.get("/:id", (req, res) => {
  Sale.findById(req.params.id)
    .then((sale) => res.json(sale))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//deleteshipper

router.route("/:id").delete((req, res) => {
  Sale.findByIdAndDelete(req.params.id)
    .then(() => res.json("Sale deleted."))
    .catch((err) => res.status(400).json("error" + err));
});
//second endpoint

router.route("/add").post(upload.single("MTA"), (req, res) => {
  const saleNo = req.body.saleNo;
  const regiNo = req.body.regiNo;
  const paymentMethod = req.body.paymentMethod;
  const modelName = req.body.modelName;
  const customer = req.body.customer;
  const user = req.body.user;
  const date = Date.parse(req.body.date);
  const payment = Number(req.body.payment);
  const luxuryTaxes = Number(req.body.luxuryTaxes);

  const MTA = req.file.originalname;

  const newSale = new Sale({
    saleNo,
    regiNo,
    paymentMethod,
    modelName,
    customer,
    user,
    date,
    payment,
    luxuryTaxes,
    MTA,
  });

  newSale
    .save()
    .then(() => res.json("Sale added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
