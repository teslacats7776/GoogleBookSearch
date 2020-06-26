import axios from "axios";

export default 

{
    //Gets all books
    getBooks: function () {
        return axios.get("/api/books")
    },

    // Gets the book with the given id
    getBook: function() {
        return axios.get("/api/books" + id);
    },

    // Deletes a book
    deleteBook: function(id) {
        return axios.delete("/api/books" + id)
    },
    //Save a book 
    saveBook: function(id) {
        return axios.post("/api/books" + id)
    }
}