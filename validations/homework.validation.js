const yup = require("yup");

const homeworkSchemaPost = yup.object({
  subject: yup.string().trim().min(3).max(64).required(),
  task: yup.string().trim().min(5).max(255).required(),
  deadLine: yup.date(),
});

const homeworkSchemaUpdate = yup.object({
  subject: yup.string().trim().min(3).max(64),
  task: yup.string().trim().min(5).max(255),
  deadLine: yup.date(),
});

module.exports = { homeworkSchemaPost, homeworkSchemaUpdate };
