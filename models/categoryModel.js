const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    //title: String || String is shorthand for {type: String}
    name: {
      type: String,
      required: [true, "A category must have a name"],
    },
  },
  { timestamps: true }
);
const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
