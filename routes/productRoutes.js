const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.post("/addproducts", productController.addproducts);
router.post("/addClothingProducts", productController.addClothingProduct);
router.get("/clothingProducts", productController.getAllClothingProducts);

module.exports = router;