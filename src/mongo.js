const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Login")
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch(() => {
    console.log("mongodb connection error");
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("Collection", newSchema);

module.exports = collection;
