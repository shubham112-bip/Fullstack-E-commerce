const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const { authenticate } = require("../middleware/auth");

router.get("/", authenticate, cartController.getCart);
router.post("/add", authenticate, cartController.addToCart);
router.post("/merge", authenticate, cartController.mergeCart);
router.post("/checkout", authenticate, cartController.checkout);

module.exports = router;
