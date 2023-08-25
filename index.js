const express = require("express");

const mongoose = require("mongoose");


const categoryRoutes = require("./routes/categoryRoutes");

const userRoutes = require("./routes/userRoutes");


const app = express();

const PORT = 8888;

app.use(express.json());


app.use("/category",categoryRoutes)

app.use("/user", userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((e) => {
      console.log(e.message);
    });
});
