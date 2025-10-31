import mongoose from "mongoose";

// Product için şema (schema) tanımı yapıyoruz.
// Bu, MongoDB'deki her ürün belgesinin nasıl görüneceğini belirler.
const ProductSchema = new mongoose.Schema(
  {
    // Ürünün adı — zorunlu alan
    name: {
      type: String, // veri tipi string
      required: [true, "Please provide a name"], // eğer verilmezse hata mesajı
    },

    // Ürünün fiyatı — zorunlu alan
    price: {
      type: Number,
      required: [true, "Please provide a price"],
    },

    // Ürünün açıklaması — zorunlu alan
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },

    // Ürün görselinin URL'si — zorunlu alan
    image: {
      type: String,
      required: [true, "Please provide a image url"],
    },
  },
  { timestamps: true } // createdAt ve updatedAt alanlarını otomatik ekler
);

// Şemayı kullanarak "Product" adında bir model oluşturuyoruz.
// Bu model üzerinden MongoDB'de CRUD işlemleri yapılır.
export default mongoose.model("Product", ProductSchema);
