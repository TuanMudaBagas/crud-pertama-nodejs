const mongoose = require("mongoose");

const siswa = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  clas: {
    type: Number,
    required: true,
    min: 10,
    max: 12,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
  },
});

module.exports = mongoose.model("Siswa", siswa);
