const Products = require("../models/Product");
const clothingProduct = require("../models/clothingProduct");
// const footWearProduct = require("../models/footwearProduct");

exports.getAll = async (req, res) => {
  const products = await Products.find();
  res.render("home", { products });
};

exports.getOne = async (req, res) => {
  const product = await Products.findById(req.params.id);
  res.render("product", { product });
};

exports.addproducts = async (req, res) => {
  const { 
    name,
    description,
    prize, 
    sizes, 
    colors,
    stock_available, 
    rating, 
    images, 
    category, 
    sub_categroy, 
    brand, 
    model, 
    specs } = req.body;
    console.log(req.body);

  if ( !name || !description || !prize || !sizes || !colors || !stock_available || !rating || !images || !category || !sub_categroy || !brand || !model || !specs)
    return res.send('Something is missing');

  const product = await Products.find();
  console.log(product);
  const nextId = product.length ? Math.max(...product.map(i => i.id)) +1 : 1;
  console.log(nextId);
  
  await Product.create({ 
    product_id: nextId, 
    name: name, 
    description: description, 
    price: prize, 
    sizes: sizes, 
    colors: colors, 
    stock_available: stock_available, 
    rating: rating, 
    images: images, 
    category: category, 
    sub_category: sub_categroy, 
    brand: brand, 
    model: model, 
    specs: specs 
  });
};

// Below Clothing Products APIs


exports.getAllClothingProducts = async (req , res) => {
  const clothingProducts = await clothingProduct.find();
  res.render("home", { clothingProducts });
};

exports.addClothingProduct = async (req , res) => {
  const {
    category,
    name,
    description,
    price,
    sizes,
    colors,
    stock_available,
    rating,
    images } = req.body;

    if (!category || !name || !description || !price || !sizes || !colors || !stock_available || !rating || !images)
      return res.status(400).send('Something is missing');

    const haveClothingProduct = await clothingProduct.find();
    const nextId = haveClothingProduct.length ? Math.max(...haveClothingProduct.map(i => i.id)) +1 : 1;

    await clothingProduct.create({
      category: category,
      product_id: nextId,
      name: name,
      description: description,
      price: price,
      sizes: sizes,
      colors: colors,
      stock_available: stock_available,
      rating: rating,
      images: images
    });
};

// Below Footwear Products APIs

exports.addFootwearProducts