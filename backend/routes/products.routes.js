import express from "express";
import {
  createProduct,
  getSingleProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

// Express Router oluşturuyoruz
const router = express.Router();

// POST /api/v1/products → ürün oluşturma
router.post("/", createProduct);

// GET /api/v1/products → tüm ürünleri listeleme
router.get("/", getProducts);

// GET /api/v1/products/:id → tek bir ürünü ID ile getir
router.get("/:id", getSingleProduct);

// PATCH /api/v1/products/:id → ürün güncelleme
router.patch("/:id", updateProduct);

// DELETE /api/v1/products/:id → ürünü silme
router.delete("/:id", deleteProduct);

// Bu router'ı dışa aktar, server.js veya app.js'te kullanabilirsin
export default router;
