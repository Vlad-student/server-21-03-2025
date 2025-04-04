const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxLength: 2,
    maxLength: 64,
  },
  author: {
    type: String,
    trim: true,
    required: true,
    maxLength: 3,
    maxLength: 64,
  },
  genre: {
    type: String,
    required: true,
    trim: true,
    enum: [
      "Fiction",
      "Non-fiction",
      "Fantasy",
      "Science Fiction",
      "Mystery",
      "Biography",
      "History",
    ],
  },
  year: {
    type: Number,
    required: true,
    min: 1000,
    max: new Date().getFullYear(),
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
