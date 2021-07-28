const router = require("express").Router();
let Machine = require("../models/machine.model");

//image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //  callback(null,'./uploads/')
    callback(null, "./../Dashboard/public/machines/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.route("/").get((req, res) => {
  Machine.find()
    .then((machines) => res.json(machines))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(upload.single("vehicleImage"), (req, res) => {
  const modelName = req.body.modelName;
  const company = req.body.company;
  const fueltype = req.body.fueltype;
  const seats = req.body.seats;
  const capacity = req.body.capacity;
  const year = req.body.year;
  const exteriorColor = req.body.exteriorColor;
  const vehicleImage = req.file.originalname;

  // console.log(req.body);

  const newMachine = new Machine({
    modelName,
    company,
    fueltype,
    seats,
    capacity,
    year,
    exteriorColor,
    vehicleImage,
  });

  newMachine
    .save()
    .then(() => res.json("Machine added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Machine.findById(req, params.id)
    .then((machine) => res.json(machine))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  Machine.findByIdAndDelete(req.params.id)
    .then(() => res.json("Machine deleted."))
    .catch((err) => res.status(400).json("error" + err));
});

router.put("/update/:id", (req, res) => {
  Machine.findById(req, params.id)
    .then((machine) => {
      machine.modelName = req.body.modelName;
      machine.seats = req.body.seats;
      machine.fueltype = req.body.fueltype;
      machine.capacity = req.body.capacity;
      machine.year = req.body.year;
      machine.exteriorColor = req.body.exteriorColor;
      machine.vehicleImage = req.file.originalname;

      machine
        .save()

        .then(() => res.json("Machine updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
