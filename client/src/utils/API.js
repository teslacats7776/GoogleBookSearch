import axios from "axios";

export default 

{
    //Make query to get all books from Google API 
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q= ${query}`)
    },

    // Deletes a book wiht given id
    deleteBook: function(id) {
        return axios.delete("/api/books" + id).then(result => result.data);
    },

    //Save a book 
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData).then(result => result.data);
    }, 

    // Get the saved books from the database
    getAllSavedBooks: function () {
        return axios.get("/api/books").then(result => result.data);
    }
};