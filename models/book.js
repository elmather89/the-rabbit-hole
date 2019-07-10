const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  author: {
    type: String,
    trim: true,
    required: "Author is Required"
  },
  description: {
    type: String,
    trim: true,
  },
  publisher: {
    type: String,
    trim: true,
  },
  year: {
    type: Number,
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;