const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  featured: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Services", servicesSchema);
