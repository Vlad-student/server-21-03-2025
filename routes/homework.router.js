const express = require("express");
const {
  createHomework,
  findAllHomeworks,
  findHomeworkById,
  updateHomeworkById,
  deleteHomeworkById,
} = require("../controllers/homework.controller");
const { validateHomework } = require("../middlewares/homework.mv");
const {
  homeworkSchemaPost,
  homeworkSchemaUpdate,
} = require("../validations/homework.validation");
const { paginate } = require("../middlewares/pagination.mv");

const homeworkRouter = express.Router();

homeworkRouter.post("/", validateHomework(homeworkSchemaPost), createHomework);
homeworkRouter.get("/", paginate ,findAllHomeworks);
homeworkRouter.get("/:idHomework", findHomeworkById);
homeworkRouter.patch("/:idHomework",
  validateHomework(homeworkSchemaUpdate),
  updateHomeworkById
);
homeworkRouter.delete("/:idHomework", deleteHomeworkById);
module.exports = homeworkRouter;
