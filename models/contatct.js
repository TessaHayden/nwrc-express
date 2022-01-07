const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
