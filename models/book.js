const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  creator: {
    type: String,
    trim: true,
    required: "Creator is Required"
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
  },
  bookAdded: {
    type: Date,
    default: Date.now
  },
  lastUpdated: Date
});

// Custom Instance Methods

bookSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;