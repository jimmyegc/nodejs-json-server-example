const express = require("express");
const bodyParser = require("body-parser");

const v1OperationsTraysRouter = require("./v1/routes/operationsTrays");

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send({ message: 'Hello' })
})

app.use(bodyParser.json());
app.use("/configurations/operationstrays", v1OperationsTraysRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});