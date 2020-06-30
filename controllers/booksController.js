const db = require("../models")

// Defining methods for the booksControlelr

module.exports = {

    // GET "/api/books"
    findAll: function(req, res) {
        db.Book
        .find(req.query)
        .sort({ date: -1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Book
        .findById (req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => status(422).json(err))
    },

    // POST "api/books"
    create: function(req, res) {
        console.log(req.body)
        db.Book
        .create(req.body)
        .then(dbSaved => res.json(dbSaved))
    },

    // DELETE "/api/books/:id"
    remove : function(req, res) {
        db.Book
        .findById ( { _id: req.params.id })
        .then( deletedBook => deletedBook.remove())
        .then( deletedBook => res.json(deletedBook))
        .catch (err => res.status(422).json(err))
    }
};