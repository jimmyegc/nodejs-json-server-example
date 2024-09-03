
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
  