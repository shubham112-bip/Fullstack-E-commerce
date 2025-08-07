const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

exports.createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

exports.maxAge = maxAge;