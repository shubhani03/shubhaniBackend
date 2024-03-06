const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: [true, "name is require"],
  },
  category: {
    type: String,
  },
  rate: {
    type: Number,
    required: [true, "rate is require"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity is require"],
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;

// const userschema = mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// module.exports = mongoose.model("users", userschema);
