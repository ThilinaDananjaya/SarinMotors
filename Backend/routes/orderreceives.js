const router = require("express").Router();
let Order = require("../models/orderreceive.model");

router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const orderId = req.body.orderId;
  const date = Date.parse(req.body.date);
  const payment = Number(req.body.payment);
  const agent = req.body.agent;
  const shipper = req.body.shipper;
  const user = req.body.user;
  const customer = req.body.customer;

  const newOrder = new Order({
    orderId,
    date,
    payment,
    agent,
    shipper,
    user,
    customer,
  });

  newOrder
    .save()
    .then(() => res.json("Order added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Order.findById(req, params.id)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.json("Order deleted."))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/update/:id").post((req, res) => {
  Order.findById(req, params.id)
    .then((order) => {
      order.orderId = req.body.orderId;
      order.date = Date.parse(req.body.date);
      order.payment = Number(req.body.payment);
      order.agent = req.body.agent;
      order.shipper = req.body.shipper;
      (order.user = req.body), user;
      order.customer = req.body.customer;

      order
        .save()
        .then(() => res.json("order updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
