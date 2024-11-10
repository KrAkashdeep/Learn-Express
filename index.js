import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/user/:id", (req, res) => {
  res.send(`user name is akash and id is ${req.params.id}`);
});

app.post("/newUser", (req, res) => {
  res.send("post method to add new data");
});

app.put("/updateData", (req, res) => {
  res.send("put is used to update the data");
});

app.delete("/deleteData", (req, res) => {
  res.send("delete is used to delete the data");
});

app.listen(3000);
