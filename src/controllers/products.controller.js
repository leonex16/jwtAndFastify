import { Product } from "../models/Product";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;
  const newProduct = await Product.create({ name, category, price, imgURL });
  res.statusCode = 201;

  return newProduct;
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.statusCode = 200;

  return products;
};

export const getProductById = async (req, res) => {
  const { ProductId } = req.params;
  const product = await Product.findById(ProductId);
  res.statusCode = 200;

  return product;
};

export const updateProductById = async (req, res) => {
  const { ProductId } = req.params;
  const productReq = req.body;
  const product = await Product.findByIdAndUpdate(ProductId, productReq, { new: true });
  res.status = 204;

  return product;
};

export const deleteProductById = async (req, res) => {
  const { ProductId } = req.params;
  await Product.findByIdAndDelete(ProductId);
  res.statusCode = 204;
  
  return;
};