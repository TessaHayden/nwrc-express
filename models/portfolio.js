const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
