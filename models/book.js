const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;
var make_upload_to_model = thumbnailPluginLib.make_upload_to_model;
 
var uploads_base = path.join(__dirname, "uploads");
var uploads = path.join(uploads_base, "u");

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
  // bookImage: {
  //   type: String,
  // },
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

// Using mongoose-thumbnail plugin to handle image file uploads

bookSchema.plugin(thumbnailPlugin, {
  name: "bookImage",
  format: "jpg",
  // size: 80,
  inline: false,
  save: true,
  upload_to: make_upload_to_model(uploads, 'bookImage'),
  relative_to: uploads_base
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;