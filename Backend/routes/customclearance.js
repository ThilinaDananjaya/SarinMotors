const router = require("express").Router();
let CustomClearance = require("../models/customclearance.model");

router.route("/").get((req, res) => {
  CustomClearance.find()
    .then((customs) => res.json(customs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const orderId = req.body.orderId;
  const lc = req.body.lc;
  const invoice = req.body.invoice;
  const taxpayment = Number(req.body.taxpayment);
  const commision = Number(req.body.commision);
  const customPayment = Number(req.body.customPayment);
  const transportPayment = Number(req.body.transportPayment);
  const user = req.body.user;
  const date = Date.parse(req.body.date);

  const newCustomClearance = new CustomClearance({
    orderId,
    lc,
    invoice,
    taxpayment,
    commision,
    customPayment,
    transportPayment,
    user,
    date,
  });

  newCustomClearance
    .save()
    .then(() => res.json("CustomClearance added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  CustomClearance.findById(req, params.id)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  CustomClearance.findByIdAndDelete(req.params.id)
    .then(() => res.json("CustomClearance deleted."))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/update/:id").post((req, res) => {
  CustomClearance.findById(req, params.id)
    .then((customclearance) => {
      customclearance.orderId = req.body.orderId;
      customclearance.lc = req.body.lc;
      customclearance.invoice = req.body.invoice;
      customclearance.customPayment = Number(req.body.customPayment);
      customclearance.transportPayment = Number(req.body.transportPayment);
      //check the transport payment again
      customclearance.commision = Number(req.body.commision);
      customclearance.taxpayment = Number(req.body.taxpayment);
      (customclearance.user = req.body), user;
      customclearance.date = Date.parse(req.body.date);

      customclearance
        .save()
        .then(() => res.json("customclearance updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
