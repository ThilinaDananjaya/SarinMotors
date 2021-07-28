const router = require("express").Router();
//require shipper model
let Shipper = require("../models/shipper.model");

//image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./../Dashboard/public/shippers/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//first endpoint

router.route("/").get((req, res) => {
  Shipper.find()
    .then((shippers) => res.json(shippers))
    .catch((err) => res.status(400).json("Error: " + err));
});

//deleteshipper

router.route("/:id").delete((req, res) => {
  Shipper.findByIdAndDelete(req.params.id)
    .then(() => res.json("Shipper deleted."))
    .catch((err) => res.status(400).json("error" + err));
});
//second endpoint

router.route("/add").post(upload.single("photo"), (req, res) => {
  const shipperId = req.body.shipperId;
  const shipperName = req.body.shipperName;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const photo = req.file.originalname;

  const newShipper = new Shipper({
    shipperId,
    shipperName,
    email,
    mobile,
    photo,
  });

  newShipper
    .save()
    .then(() => res.json("Shipper added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
