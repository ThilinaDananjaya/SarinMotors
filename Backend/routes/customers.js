const router = require("express").Router();
let Customer = require("../models/customer.model");

//image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //  callback(null,'./uploads/')
    callback(null, "./../Dashboard/public/customers/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/").get((req, res) => {
  Customer.find()
    .then((customers) => res.json(customers))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(upload.single("customerImage"), (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const mobile = Number(req.body.mobile);
  const dob = Date.parse(req.body.dob);
  const customerImage = req.file.originalname;

  const newCustomer = new Customer({
    username,
    password,
    email,
    mobile,
    dob,
    customerImage,
  });

  newCustomer
    .save()
    .then(() => res.json("Customer added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Customer.findById(req, params.id)
    .then((customer) => res.json(customer))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  Customer.findByIdAndDelete(req.params.id)
    .then(() => res.json("Customer deleted."))
    .catch((err) => res.status(400).json("error" + err));
});

router.route("/update/:id").post((req, res) => {
  Customer.findById(req, params.id)
    .then((customer) => {
      customer.username = req.body.username;
      customer.password = req.body.password;
      customer.email = req.body.email;
      customer.mobile = Number(req.body.mobile);
      customer.dob = Date.parse(req.body.dob);

      customer
        .save()
        .then(() => res.json("customer updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
