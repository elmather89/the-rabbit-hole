const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rabbitholedb"
);
db.Book
.find({})
.then(Books => {
    const updates = Books.map (book => {
        console.log(book);
        const authorToken = book.creator.split(" ")
        console.log(authorToken);
        return db.Creator.findOne({firstName: authorToken[0], lastName: authorToken[1]})
            .then(creator => {
                console.log(creator);
                book.author = creator._id;

                return db.Book.updateOne(book);
            });
    });

    return updates;
}).then(updates=>{
    Promise.all(updates).then(res=>{
        console.log(res);
        process.exit(0);
    });
});