const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: {
    type: Number
  },
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  creatorName: {
    type: String,
    trim: true,
    required: "Creator is Required"
  },
  synopsis: {
    type: String,
    trim: true,
  },
  originalPublisher: {
    type: String,
    trim: true,
  },
  currentPublisher: {
    type: String,
    trim: true,
  },
  yearPublished: {
    type: Number,
  },
  quote: {
    type: String,
  },
  bookImage: {
    type: String,
  },
  bookAdded: {
    type: Date,
    default: Date.now
  },
  lastUpdated: Date,
  _creators:[{
    type: Schema.Types.Number,
    ref: "Creator"
  }]
  ,
  dob: {
    type: Number,
  },
  dod: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  creatorTags: {
    type: String,
    trim: true,
  },
});

// Custom Instance Methods

bookSchema.methods.lastUpdatedDate = function () {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;