const createClient = require("@supabase/supabase-js");
const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

createClient(supabaseUrl, supabaseKey);

const getAllWebFormsSetup = async (req, res) => {
  console.log("getAllWebFormsSetup");
  const { data, error } = await supabase
    .from("dicWebFormsComponentes")
    .select();

  console.log("data", data);
  console.log("error", error);

  res.send({ status: "OK", data });
};

const getOneWebFormSetup = async (req, res) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    return;
  }
  // console.log(id)
  const historyItem = historyService.getOneHistory(id);
  res.send({ status: "OK", data: historyItem });
};

module.exports = {
  getAllWebFormsSetup,
  getOneWebFormSetup,
};
