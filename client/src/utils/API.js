import axios from "axios";

export default {
    // Gets all books
    getBooks: function () {
        return axios.get("/api/Detail");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },
    // Creator api's ///////////////////////////////////////////////////
    getCreators: function () {
        return axios.get("/api/creators");
    },
    getCreator: function(id) {
        return axios.get("/api/creators/" + id);
    },
    deleteCreator: function(id) {
        return axios.delete("/api/creators/" + id);
    },
    saveCreator: function(creatorData) {
        return axios.post("/api/creators", creatorData);
    }
};
