import axios from "axios";

export default {
    // Book api's //////////////////////////////////////////////
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Updates the book with the given id
    updateBook: function (id, bookData) {
        return axios.put("/api/books/" + id, bookData);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        console.log(bookData);
        return axios.post("/api/books", bookData);
    },
    // Creator api's ///////////////////////////////////////////////////
    getCreators: function () {
        return axios.get("/api/creators");
    },
    getCreator: function (id) {
        return axios.get("/api/creators/" + id);
    },
    deleteCreator: function (id) {
        return axios.delete("/api/creators/" + id);
    },
    updateCreator: function (id) {
        return axios.put("/api/creators/" + id);
    },
    saveCreator: function (creatorData) {
        return axios.post("/api/creators", creatorData);
    },
    // User api's ///////////////////////////////////////////////
    getUsers: function () {
        return axios.get("/api/users");
    },
    getUser: function (id) {
        return axios.get("/api/users/" + id);
    },
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    }
};
