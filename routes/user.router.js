const express = require("express");
const {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
  countUsers,
  userStatistic,
} = require("../controllers/user.controller");
const {
  validateUser,
  validateUserQuery,
  buildFilterUser,
} = require("../middlewares/user.mv");
const {
  userSchemaPost,
  userSchemaUpdate,
  userSchemaQuery,
} = require("../validations/user.validation");
const { paginate } = require("../middlewares/pagination.mv");

const userRouter = express.Router();

userRouter.post("/", validateUser(userSchemaPost), createUser);
userRouter.get(
  "/",
  paginate,
  validateUserQuery(userSchemaQuery),
  buildFilterUser,
  findAllUsers
);

userRouter.get(
  "/count",
  validateUserQuery(userSchemaQuery),
  buildFilterUser,
  countUsers
);

userRouter.get(
  '/stat',
  userStatistic
);

userRouter.get("/:idUser", findUserById);
userRouter.patch("/:idUser", validateUser(userSchemaUpdate), updateUserById);
userRouter.put("/:idUser", updateUserById);
userRouter.delete("/:idUser", deleteUserById);

module.exports = userRouter;
