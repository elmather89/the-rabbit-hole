const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatorCatalogSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    creators: [
      {
        type: Schema.Types.ObjectId,
        ref: "Creator"
      }
    ]
});

const CreatorCatalog = mongoose.model("CreatorCatalog", CreatorCatalogSchema);

module.exports = CreatorCatalog
