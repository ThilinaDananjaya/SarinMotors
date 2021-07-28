const router = require("express").Router();
//require agent model
let Agent = require("../models/agent.model");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-handlebars");

//image
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    //  callback(null,'./uploads/')
    callback(null, "./../Dashboard/public/agents/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// const {v4:uuidv4}=require('uuid');
// let path = require('path');

// //image
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, '../images');
//   },
//   filename: function(req, file, cb) {
//       cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   if(allowedFileTypes.includes(file.mimetype)) {
//       cb(null, true);
//   } else {
//       cb(null, false);
//   }
// }

// let upload = multer({ storage, fileFilter });

//view agents
router.route("/").get((req, res) => {
  Agent.find()
    .then((agents) => res.json(agents))
    .catch((err) => res.status(400).json("Error: " + err));
});

//find agent by id
router.get("/:id", (req, res) => {
  Agent.findById(req.params.id)
    .then((agent) => res.json(agent))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//update agent
router.put("/update/:id", upload.single("agentImage"), (req, res) => {
  Agent.findById(req.params.id).then((agent) => {
    agent.agentId = req.body.agentImage;
    agent.agentName = req.body.agentName;
    agent.email = req.body.email;
    agent.mobile = req.body.mobile;
    // agent.agentImage = req.file;

    agent
      .save()
      .then(() => res.json("Agent updated successfully!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

//deleteagent

router.route("/:id").delete((req, res) => {
  Agent.findByIdAndDelete(req.params.id)
    .then(() => res.json("Agent deleted."))
    .catch((err) => res.status(400).json("error" + err));
});
//second endpoint

router.route("/add").post(upload.single("agentImage"), (req, res) => {
  const agentId = req.body.agentId;
  const agentName = req.body.agentName;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const company = req.body.company;
  const agentImage = req.file.originalname;

  const newAgent = new Agent({
    agentId,
    agentName,
    email,
    mobile,
    company,
    agentImage,
  });

  newAgent
    .save()
    .then(() => res.json("Agent added!"))
    .catch((err) => res.status(400).json("Error: " + err));

  //mail step1
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,

    auth: {
      user: "cloudsensorplatform@gmail.com",
      pass: "alertmanagement",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  //mail step 2

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        extname: ".handlebars",
        layoutsDir: "./views/",
        defaultLayout: "index",
      },
      viewPath: "./views/",
    })
  );

  let mailOptions = {
    from: "cloudsensorplatform@gmail.com",
    to: email,
    subject: "You added as a new agent",
    text: "Welcome!",
    template: "index",
    context: {
      agentId: agentId,
      agentName: agentName,
      email: email,
      mobile: mobile,
      Company: company,
    },
  };

  //step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error occurs", err);
    } else {
      console.log("Email Sent");
    }
  });
});

module.exports = router;
