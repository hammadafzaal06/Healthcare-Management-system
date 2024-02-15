const User = require("../models/user");

const getAllUser = async (req, res, next) => {
  try {
    const docs = await User.find();
    console.log(docs);
    res.status(201).json({
      message: "Here is the List of All the users",
      user: docs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const getUserById = async (req, res, next) => {
  try {
    const doc = await User.findById(req.params.id);
    console.log(doc);
    res.status(201).json({
      message: "Here is the user",
      user: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    const doc = await user.save();
    console.log(doc);
    res.status(201).json({
      message: "user craeted successfully",
      user: doc,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const updateUserById = async (req, res, next) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
        },
      },
      { new: true }
    );
    console.log(result);
    res.status(201).json({
      message: "Here is the Updated user",
      user: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const result = await User.findOneAndDelete(req.params.id);
    console.log(result);
    res.status(201).json({
      message: "User is deleted Successfully",
      user: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
