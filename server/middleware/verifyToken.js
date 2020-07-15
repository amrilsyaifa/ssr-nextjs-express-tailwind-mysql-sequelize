require("dotenv").config();
var jwt = require("jsonwebtoken");
var secret = process.env.SECRET;

function VerifyToken(req, res, next) {
  const token = req.cookies.auth;
  if (token) {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        return res.status(401).send({
          status: "error",
          messages: "Failed to authenticate token.",
          data: "",
        });
      }
      next();
    });
  } else {
    return res.status(401).send({
      status: "error",
      messages: "No token provided.",
      data: "",
    });
  }
}

module.exports = VerifyToken;
