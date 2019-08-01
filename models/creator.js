const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creatorSchema = new Schema({
  _id: {
    type: Number
  },
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
    type: Number
  },
  dateOfDeath: {
    type: String,
    trim: true,
  },
  biography: {
    type: String,
    trim: true,
  },
  legacy: {
    type: String,
    trim: true
  },
  ownWords: {
    type: String,
    trim: true
  },
  tags: {
    type: String,
    trim: true
  },
  image: {
    type: String
    // data: Buffer
  },
  creatorAdded: {
      type: Date,
      default: Date.now
  },
  fullName: String,
  lastUpdated: Date,
  _books: [{
      type: Schema.Types.Number,
      ref: "Book"
    }]
});

// Custom Instance Methods
creatorSchema.methods.setFullName = function() {
    this.fullName = this.firstName + " " + this.lastName;
    return this.fullName;
};

creatorSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
    return this.lastUpdated;
};

const Creator = mongoose.model("Creator", creatorSchema);

module.exports = Creator;