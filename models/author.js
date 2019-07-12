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
  // birthdate: {
  //   type: Date,
  // },
  description: {
    type: String,
    trim: true,
  },
  authorAdded: {
      type: Date,
      default: Date.now
  },
  fullName: String,
  lastUpdated: Date,
  // books: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Book"
  //   }
  // ]
});

// Custom Instance Methods

authorSchema.methods.setFullName = function() {
    this.fullName = this.firstName + " " + this.lastName;
    return this.fullName;
};

authorSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
    return this.lastUpdated;
};

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;