const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const googlebooks = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  synopsis: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;
