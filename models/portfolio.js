const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  name: {
    type: String,
    required: true
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
},  
  {
    timestamps: true
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
