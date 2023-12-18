const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashPass = bcrypt.hashSync(password, 8);
    const data = await User.create({
      email,
      password: hashPass,
    });

    res.status(201).json({
      msg: "user is created successfully ",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "something went wrong while creating creating author ",
      err,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json({
      msg: "get authors successfully ",
      data,
    });
  } catch (err) {
    res.status(400).json({
      msg: "something went wrong in get users ",
      err,
    });
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById(id);
    res.status(200).json({
      msg: "get user successfully ",
      data,
    });
  } catch (err) {
    res.status(400).json({
      msg: "something went wrong in get user ",
      err,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndDelete(id);
    res.status(200).json({
      msg: " user delete successfully ",
      data,
    });
  } catch (err) {
    res.status(400).json({
      msg: "something went wrong in delete user ",
      err,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;
    console.log(email, password);

    const user = await User.findById(id);

    if (user && email === user.data.email) {
      const hashPass = bcrypt.hashSync(password, 10);

      const data = await User.findByIdAndUpdate(
        { _id: id },
        {
          email,
          password: hashPass,
        },
        {
          new: true,
        }
      );

      res.status(200).json({
        msg: "update author successfully ",
        data,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      msg: "something went wrong in update user ",
      err,
    });
  }
};
module.exports = { createUser, getUsers, deleteUser, getUser, updateUser };
