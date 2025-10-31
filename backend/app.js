// .env dosyasındaki değişkenleri (örneğin MONGO_URI, PORT vb.) kullanabilmek için dotenv'i yüklüyoruz.
import dotenv from "dotenv";
dotenv.config();

// express-async-errors, async fonksiyonlarda oluşan hataları otomatik olarak yakalayıp middleware'e iletir
import "express-async-errors";
import path from "path";
// import { fileURLToPath } from "url";
import cors from "cors";

import express from "express";

import connectDB from "./db/db.js"; // MongoDB bağlantısı için fonksiyon
import notFound from "./middleware/not-found.js"; // 404 hatası için middleware
import productRouter from "./routes/products.routes.js"; // ürünlerle ilgili tüm route’lar
import errorHandlerMiddleware from "./middleware/error-handler.js"; // genel hata yakalama middleware’i

const app = express();

// CORS politikasını ayarlıyoruz
app.use(
  cors({
    origin: "http://localhost:5173", // sadece frontend originine izin ver
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// JSON formatındaki request body’lerini okuyabilmek için
app.use(express.json());

// /api/v1/products altındaki tüm endpoint'leri productRouter’a yönlendiriyoruz
app.use("/api/v1/products", productRouter);

//configuration for depleyment
// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();

// configuration for depleyment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Tanımlanmayan route’lar için 404 middleware’i
app.use(notFound);

// Hataları merkezi bir şekilde yakalayıp yönetmek için
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000; // PORT .env'den alınır, yoksa 3000 varsayılan

// Sunucuyu başlatan fonksiyon
const start = async () => {
  try {
    // MongoDB’ye bağlan
    await connectDB(process.env.MONGO_URI);
    console.log("connected DB");

    // Sunucuyu belirtilen port’ta dinlemeye başla
    app.listen(port, () => console.log("Server is listening on port " + port));
  } catch (error) {
    // Bağlantı ya da sunucu başlatma hatalarını konsola yaz
    console.log(error);
  }
};

start(); // uygulamayı başlat
