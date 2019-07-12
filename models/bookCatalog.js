const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookCatalog = new Schema({
    name: {
        type: String,
        unique: true
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Book"
      }
    ]
});

const BookCatalog = mongoose.model("BookCatalog", BookCatalog);

module.exports = BookCatalog
