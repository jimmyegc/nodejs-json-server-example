require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const v1OperationsTraysRouter = require("./v1/routes/operationsTrays");
const v1Histories = require("./v1/routes/history");
const v1WebFormsSetup = require("./v1/routes/webformssetup");

// Configuration
const app = express();
const PORT = process.env.PORT || 3000;
// using morgan for logs
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.use("/configurations/v1/operationstrays", v1OperationsTraysRouter);
app.use("/configurations/v1/histories", v1Histories);
app.use("/configurations/v1/webformssetup", v1WebFormsSetup);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
