const User = require("../models/User.js");
const {createToken,maxAge} = require("../utils/jwt.js");

exports.registerPage = (req, res) => res.render("auth/register");
exports.loginPage = (req, res) => res.render("auth/login");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.render("auth/register", { error: "User already exists" });

  const user = await User.create({ name, email, password });
  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.redirect("/login");
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.render("auth/login", { error: "Invalid email or password" });
  }
  const token = createToken(user._id);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.redirect("/products");
};

exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/login");
};