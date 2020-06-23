const router = require("express").Router();


// Matches with "api/books"
router.route("/")


// Matches with "/api/books/:id"
router 
    .route("/:id")
    .get()