import { StatusCodes } from "http-status-codes";
import Product from "../models/Product.js";

// POST /api/v1/products → ürün oluşturma
export const createProduct = async (req, res) => {
  const { name, price, description, image } = req.body;
  const product = await Product.create({ name, price, description, image });

  return res.status(StatusCodes.CREATED).json({
    data: product,
    success: true,
    message: "Product created successfully",
  });
};

// GET /api/v1/products → tüm ürünleri listeleme
export const getProducts = async (req, res) => {
  const products = await Product.find({}).sort("createdAt");

  return res.status(StatusCodes.OK).json({
    count: products.length,
    data: products,
    success: true,
    message: products.length
      ? "Products fetched successfully"
      : "No products available", // boş array durumunda kullanıcı dostu mesaj
  });
};

// GET /api/v1/products/:id → tek bir ürünü getir
export const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });

  return res.status(StatusCodes.OK).json({
    data: product,
    success: true,
    message: "Product fetched successfully",
  });
};

// PATCH /api/v1/products/:id → ürün güncelle
export const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true, // güncellenmiş belgeyi döndür
    runValidators: true, // schema doğrulamasını uygula
  });

  return res.status(StatusCodes.OK).json({
    data: product,
    success: true,
    message: "Product updated successfully",
  });
};

// DELETE /api/v1/products/:id → ürün sil
export const deleteProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findByIdAndDelete({ _id: productId });

  return res.status(StatusCodes.OK).json({
    data: product,
    success: true,
    message: "Product deleted successfully",
  });
};
