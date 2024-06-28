app.get("/products", async (req, res) => {
  const { data, error } = await supabase.from("products").select();

  console.log("data", data);
  console.log("error", error);

  res.send(data);
});

app.get("/products/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", req.params.id);

  console.log("data", data);
  console.log("error", error);

  res.send(data);
});

app.post("/products", async (req, res) => {
  const { error } = await supabase.from("products").insert({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });
  if (error) {
    res.send(error);
  }
  res.send("created!!");
});

app.put("/products/:id", async (req, res) => {
  console.log("id", req.params.id);
  console.log("name:", req.body.name);
  console.log("description:", req.body.description);
  console.log("price:", req.body.price);

  const { error } = await supabase
    .from("products")
    .update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    })
    .eq("id", req.params.id);

  if (error) {
    res.send(error);
  }
  res.send("updated!!");
});

app.delete("/products/:id", async (req, res) => {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", req.params.id);
  if (error) {
    res.send(error);
  }
  res.send("deleted!!");
});
