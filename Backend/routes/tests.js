const router = require("express").Router();
//require test model
let Test = require("../models/test.model");

//image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //  callback(null,'./uploads/')
    callback(null, "./../Dashboard/public/test/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//view tests
router.route("/").get((req, res) => {
  Test.find()
    .then((tests) => res.json(tests))
    .catch((err) => res.status(400).json("Error: " + err));
});

//find test by id
router.get("/:id", (req, res) => {
  Test.findById(req.params.id)
    .then((test) => res.json(test))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//update test
router.put("/update/:id", (req, res) => {
  Test.findById(req.params.id).then((test) => {
    test.testname = req.body.testname;
    test.picone = req.file.originalname;

    test
      .save()
      .then(() => res.json("Test updated successfully!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//deleteagent

router.route("/:id").delete((req, res) => {
  Test.findByIdAndDelete(req.params.id)
    .then(() => res.json("Test deleted."))
    .catch((err) => res.status(400).json("error" + err));
});
//second endpoint
var multiplefile = upload.fields([
  { name: "picone", maxCount: 1 },
  { name: "pictwo", maxCount: 1 },
]);

router.route("/add").post(multiplefile, (req, res) => {
  const testname = req.body.testname;
  const picone = req.files["picone"][0];
  const pictwo = req.files["pictwo"][0];

  const newTest = new Test({ testname, picone, pictwo });

  newTest
    .save()
    .then(() => res.json("Test added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
