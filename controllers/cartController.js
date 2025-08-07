const User = require("../models/User");

exports.getCart = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.render("cart", { cart: user.cart });
};

exports.addToCart = async (req, res) => {
  const { product_id, quantity, selectedColor, selectedSize } = req.body;
  const user = await User.findById(req.user.id);
  user.cart.push({ product_id, quantity, selectedColor, selectedSize });
  await user.save();
  res.redirect("/cart");
};

exports.mergeCart = async (req, res) => {
  const localCart = req.body.cart;
  const user = await User.findById(req.user.id);
  user.cart = [...user.cart, ...localCart];
  await user.save();
  res.status(200).json({ message: "Cart merged" });
};

exports.checkout = async (req, res) => {
  const user = await User.findById(req.user.id);
  user.cart = [];
  await user.save();
  res.render("cart", { cart: [] });
};