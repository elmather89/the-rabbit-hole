const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookCatalogSchema = new Schema({
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

const BookCatalog = mongoose.model("BookCatalog", BookCatalogSchema);

module.exports = BookCatalog
