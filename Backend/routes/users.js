const router = require("express").Router();
//require model that created early
let User = require("../models/user.model");

//image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //  callback(null,'./uploads/')
    callback(null, "./../Dashboard/public/users/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//first end point -GET

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//second end point - POST

router.route("/add").post(upload.single("employeeImage"), (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const address = req.body.address;
  const homePhone = req.body.homePhone;
  const marriedState = req.body.marriedState;
  const dob = Date.parse(req.body.dob);
  const startDate = Date.parse(req.body.startDate);
  const empType = req.body.empType;
  const gender = req.body.gender;
  const bank = req.body.bank;
  const accountNo = req.body.accountNo;
  const position = req.body.position;
  const qualification = req.body.qualification;
  const employeeImage = req.file.originalname;

  const newUser = new User({
    username,
    password,
    email,
    mobile,
    address,
    homePhone,
    marriedState,
    dob,
    startDate,
    empType,
    gender,
    bank,
    accountNo,
    position,
    qualification,
    employeeImage,
  });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("error" + err));
});

router.put("/update/:id", upload.single("userImage"), (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.usertypeId = req.body.usertypeId;
      user.username = req.body.username;
      user.passsword = req.body.passsword;
      user.email = req.body.email;
      user.mobile = req.body.mobile;

      user
        .save()
        .then(() => res.json("user updated"))
        .catch((err) => res.status(400).json("error" + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
