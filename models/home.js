const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeSchema = new Schema(
  {
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Partner", partnerSchema);
