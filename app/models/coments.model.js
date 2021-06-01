const mongoose = require("mongoose");

const Coment = mongoose.model(
  "Coment",
  new mongoose.Schema({
    user: String,
    coment : String
  })
);

module.exports = Coment;