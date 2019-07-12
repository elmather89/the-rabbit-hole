const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorCatalog = new Schema({
    name: {
        type: String,
        unique: true
    },
    authors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Author"
      }
    ]
});

const AuthorCatalog = mongoose.model("AuthorCatalog", AuthorCatalog);

module.exports = AuthorCatalog
