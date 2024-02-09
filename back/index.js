const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')


mongoose
  .connect("mongodb+srv://stock:<stock>@cluster0.mnihbn8.mongodb.net/")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  const app = express ()
  app.use(cors())
  app.use(express.json())





  app.listen(5173, () => {
    console.log("Server listening on port 5173 ");
  });