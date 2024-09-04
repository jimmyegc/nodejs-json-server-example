import { config } from "dotenv";
config();

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

// Routes
//import v1OperationsTrays from './v1/routes/operationsTrays.js'
import v1Profiling from "./v1/routes/rProfiling.js"
import v1DefaultRouter from "./v1/routes/rDefault.js"

const app = express();

// using morgan for logs
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

//app.use("/configurations/v1/operationstrays", v1OperationsTrays)
app.use("/configurations/v1/profiling", v1Profiling);
app.use("/", v1DefaultRouter);

app.listen(3000, () => {
  console.log(`🚀 Server running on port http://localhost:3000`);  
});
