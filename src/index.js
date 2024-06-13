const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const v1OperationsTraysRouter = require("./v1/routes/operationsTrays");
const v1Histories = require("./v1/routes/history")

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send({ message: 'Hello' })
})

app.use(cors());
app.use(bodyParser.json());

app.use("/configurations/v1/operationstrays", v1OperationsTraysRouter);
app.use("/configurations/v1/histories", v1Histories)

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});