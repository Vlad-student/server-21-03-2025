const createError = require('http-errors');
const Homework = require("../models/Homework");

module.exports.createHomework = async (req, res, next) => {
  try {
    const newHomeWork = await Homework.create(req.body);
    res.status(201).send({ data: newHomeWork });
  } catch (error) {
    next(createError(400, error.message));
  }
};

module.exports.findAllHomeworks = async (req, res, next) => {
  try {
    const { subject, task } = req.query;
    const {limit , skip} = req.pagination;
    const filter = {};
    if (subject) {
      filter.subject = new RegExp(subject, "i");
    }
    if (task) {
      filter.task = new RegExp(task, "i");
    }
    const homeworks = await Homework.find(filter).skip(skip).limit(limit);
    res.status(200).send({ data: homeworks });
  } catch (error) {
    next(error);
  }
};

module.exports.findHomeworkById = async (req, res, next) => {
  try {
    const homework = await Homework.findById(req.params.idHomework);
    res.status(200).send({ data: homework });
  } catch (error) {
    return next(404, 'id book not found');
  }
};

module.exports.updateHomeworkById = async (req, res, next) => {
  try {
    const updatedHomework = await Homework.findByIdAndUpdate(
      req.params.idHomework,
      req.body,
      { new: true }
    );
    res.status(200).send({ data: updatedHomework });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHomeworkById = async (req, res, next) => {
  try {
    const deletedHomework = await Homework.findByIdAndDelete(
      req.params.idHomework
    );
    res.status(200).send({ data: deletedHomework });
  } catch (error) {
    next(error);
  }
};
