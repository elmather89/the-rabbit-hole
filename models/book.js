const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  creator: 
  // [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Creator",
  //   trim: true,
  //   required: "Creator is Required"
  // }]
  {
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
  image: {
    type: String,
    data: Buffer
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