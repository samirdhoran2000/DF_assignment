const User = require("../model/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      res.status(400).json({
        msg: "user not found ",
      });
      return;
    }
    console.log(password, user);

    const cnfPass = bcrypt.compareSync(password.toString(), user.password);

    console.log(cnfPass);
    if (cnfPass) {
      res.status(400).json({
        msg: "password not match ",
      });
      return;
    }

    const { msg, ...data } = user;

    const payload = {
      id: data._doc._id,

      email: data._doc.email,
    };
    console.log(msg, data._doc);
    console.log(payload);
    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err);
          res.status(400).json({
            msg: "something went wrong while signing the token",
            err,
          });
          return;
        } else {
          console.log(token);
          res.status(200).json({
            msg: "login successful ",
            userId: data._doc._id,
            token,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "something went wrong in login controller ",
    });
  }
};

module.exports = { login };
