const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatorCatalogSchema = new Schema({
  firstName: {
        type: String,
        unique: true,
        required: true
    },
    books: [
      {
        type: Schema.Types.ObjectId,
        ref: "Creator"
      }
    ]
});

const CreatorCatalog = mongoose.model("CreatorCatalog", CreatorCatalogSchema);

module.exports = CreatorCatalog
