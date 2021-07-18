const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

//connect mongodb atlas using .env file

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully!");
});

//creating routes

const usertypeRouter = require("./routes/usertypes");
const usersRouter = require("./routes/users");
const agentsRouter = require("./routes/agents");
const shipperRouter = require("./routes/shippers");
const customerRouter = require("./routes/customers");
const orderRouter = require("./routes/orders");
const CustomClearanceRouter = require("./routes/customclearance");
// const OrderReceiveRouter=require('./routes/orderreceives');
const VehicleStockRouter = require("./routes/stock");
const signupRouter = require("./routes/signup");
// const loginRouter = require("./routes/login");

//using routes

app.use("/users", usersRouter);
app.use("/usertypes", usertypeRouter);
app.use("/agents", agentsRouter);
app.use("/shippers", shipperRouter);
app.use("/customers", customerRouter);
app.use("/orders", orderRouter);
app.use("/customclearances", CustomClearanceRouter);
app.use("/stocks", VehicleStockRouter);
app.use("/signup", signupRouter);
// app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Server is start at server ${port}`);
});
