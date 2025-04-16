const express = require("express");
const {
  createBook,
  findAllBooks,
  findBookById,
  updateBookById,
  deleteBookById,
  countBooks,
  bookStatistic,
  getTopAuthors
} = require("../controllers/book.controller");
const {
  validateBook,
  validateBookQuery,
  buildFilterBook,
} = require("../middlewares/book.mv");
const {
  bookShemaPost,
  bookShemaUpdate,
  bookShemaQuery,
} = require("../validations/book.validation");
const { paginate } = require("../middlewares/pagination.mv");

const bookRouter = express.Router();

bookRouter.post(
  "/",
  validateBookQuery(bookShemaQuery),
  validateBook(bookShemaPost),
  createBook
);
bookRouter.get(
  "/",
  paginate,
  validateBookQuery(bookShemaQuery),
  buildFilterBook,
  findAllBooks
);

bookRouter.get(
  '/top-authors',
  validateBookQuery(bookShemaQuery),
  buildFilterBook,
  getTopAuthors
);

bookRouter.get(
  "/count",
  validateBookQuery(bookShemaQuery),
  buildFilterBook,
  countBooks
);

bookRouter.get(
  '/stat',
  validateBookQuery(bookShemaQuery),
  buildFilterBook,
  bookStatistic,
);

bookRouter.get("/:idBook", findBookById);
bookRouter.patch(
  "/:idBook",
  validateBookQuery(bookShemaQuery),
  validateBook(bookShemaUpdate),
  updateBookById
);
bookRouter.delete("/:idBook", deleteBookById);

module.exports = bookRouter;
