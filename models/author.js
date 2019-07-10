const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  birthdate: {
    type: Date,
  },
  description: {
    type: String,
    trim: true,
  }
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;