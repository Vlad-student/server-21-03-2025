const User = require("../models/User");

module.exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ data: newUser });
  } catch (err) {
    next(err);
  }
};

module.exports.findAllUsers = async (req, res, next) => {
  try {
    console.log(req.query);
    const { gender, minAge,maxAge , login } = req.query;
    const filter = {};
    if (gender) {
      filter.isMale = gender === "male";
    }
    if(login)
    {
      filter.login =login
    }
    if(minAge || maxAge){
      filter.age ={};
      if(minAge){
        filter.age.$gte = Number(minAge);
      }
      if(maxAge){
        filter.age.$lt = Number(maxAge);
      }
     }
    const users = await User.find( filter );
    res.status(200).send({ data: users });
  } catch (err) {
    next(err);
  }
};

module.exports.findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.idUser);
    if (!user) {
      return res.status(400).send({ data: "user not found" });
    }
    res.status(200).send({ data: user });
  } catch (err) {
    next(err);
  }
};

module.exports.updateUserById = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.idUser,
      req.body,
      { new: true }
    );
    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUserById = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.idUser);
    if (!deletedUser) {
      return res.status(404).send({ data: "user not found" });
    }
    res.status(200).send({ data: deletedUser });
  } catch (error) {
    next(error);
  }
};
