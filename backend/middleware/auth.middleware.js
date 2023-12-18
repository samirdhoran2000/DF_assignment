
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginAuth = async (req, res, next) => {
  try {
    const token = req.headers?.authorization
    console.log(token);
    if (!token) {
      res.status(400).json({
        msg: "unauthorize access token is missing or invalid or upsent",
      });
    } else {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          res.status(400).json({
            msg: "error while verifying token",
            error: err,
          });
        } else {
          console.log("middleware called ", decoded);

          const { id, ...rest } = decoded;
          console.log("id in middleware ", id, "resstt  ", rest);
          req.id = id;
          next();
        }
      });
    }
  } catch (error) {
    console.log(error instanceof Error);

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        msg: "session expired ",
      });
    } else {
      return res.status(401).json({
        msg: " error in login middleware ",
      });
    }
  }
};

module.exports = { loginAuth };

