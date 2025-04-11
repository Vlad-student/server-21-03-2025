const yup = require("yup");

const bookShemaPost = yup.object({
  title: yup.string().trim().min(2).max(64).required(),
  author: yup.string().trim().min(3).max(64).required(),
  genre: yup
    .string()
    .trim()
    .oneOf([
      "Fiction",
      "Non-fiction",
      "Fantasy",
      "Science Fiction",
      "Mystery",
      "Biography",
      "History",
    ])
    .required(),
  year: yup.number().min(1000).max(new Date().getFullYear()).required(),
  available: yup.boolean().optional(),
});

const bookShemaUpdate = yup.object({
  title: yup.string().trim().min(2).max(64),
  author: yup.string().trim().min(3).max(64),
  genre: yup
    .string()
    .trim()
    .oneOf([
      "Fiction",
      "Non-fiction",
      "Fantasy",
      "Science Fiction",
      "Mystery",
      "Biography",
      "History",
    ]),
  year: yup.number().min(1000).max(new Date().getFullYear()),
  available: yup.boolean().optional(),
});

const bookShemaQuery = yup.object({
  title: yup.string().trim().min(1).max(255),
  author: yup.string().trim().min(1).max(64),
  genre: yup.string().trim().min(1).max(64),
  available: yup.string().trim().oneOf(['yes', 'no']),
  minYear: yup.number().min(1000).max(new Date().getFullYear()),
  maxYear: yup.number().min(1000).max(new Date().getFullYear()),
});

module.exports = { bookShemaPost, bookShemaUpdate, bookShemaQuery };
