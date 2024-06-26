import { config } from "dotenv";
config();

import express from "express";
import { createClient } from "@supabase/supabase-js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// using morgan for logs
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/configurations/v1/webformssetup", async (req, res) => {
  const { data, error } = await supabase
    .from("dicWebFormsComponentes")
    .select()
    .order("id");

  console.log("data", data);
  console.log("error", error);

  res.send({ status: "OK", data });
});

app.get("/configurations/v1/webformssetup/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("dicWebFormsComponentes")
    .select()
    .eq("id", req.params.id);

  console.log("data", data);
  console.log("error", error);

  res.send({ status: "OK", data });
});

app.get("/configurations/v1/webformssetup/category/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("dicWebFormsComponentes")
    .select()
    .eq("idWebFormComponenteTipo", req.params.id)
    .order("id");

  console.log("data", data);
  console.log("error", error);

  res.send({ status: "OK", data });
});

app.get("/configurations/v1/webformstypes", async (req, res) => {
  console.log("/configurations/v1/webformstypes/");

  const { data, error } = await supabase
    .from("dicWebFormsComponentesTipos")
    .select()
    .order("id");

  console.log("data", data);
  console.log("error", error);

  res.send({ status: "OK", data });
});

app.get("/configurations/v1/webformstypes/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("dicWebFormsComponentesTipos")
    .select()
    .eq("id", req.params.id);

  console.log("data", data);
  console.log("error", error);

  res.send({ status: "OK", data });
});

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.get("*", (req, res) => {
  res.send({ message: "404 not found" });
});

app.listen(3000, () => {
  console.log(`> Ready on http://localhost:3000`);
});
