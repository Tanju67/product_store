import { StatusCodes } from "http-status-codes";
import CustomAPIError from "../errors/customError.js";

// Genel hata yakalama middleware'i
// Bu middleware, tüm route'larda fırlatılan hataları yakalar
const errorHandlerMiddleware = (err, req, res, next) => {
  // Varsayılan hata yapısı (default değerler)

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, // default: 500
    message: err.message || "Something went wrong, please try again later.", // default mesaj
  };

  // Eğer hata bizim tanımladığımız özel CustomAPIError ise
  if (err instanceof CustomAPIError) {
    return res
      .status(customError.statusCode)
      .json({ message: customError.message });
  }

  // MongoDB ValidationError yakalama (ör: required alan eksik)
  if (err.name === "ValidationError") {
    console.log(err.name); // hata tipini terminalde görebilirsin
    customError.message = Object.values(err.errors)
      .map((item) => item.message) // tüm validation mesajlarını birleştir
      .join(", ");
    customError.statusCode = StatusCodes.BAD_REQUEST; // 400
  }

  // Duplicate key hatası (ör: unique bir alanın tekrar girilmesi)
  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )}. Please choose another value.`;
    customError.statusCode = StatusCodes.BAD_REQUEST; // 400
  }

  // CastError (ör: geçersiz MongoDB ObjectId ile sorgu)
  if (err.name === "CastError") {
    customError.message = `No item found with id: ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND; // 404
  }

  // Hata mesajını JSON formatında döndür
  return res
    .status(customError.statusCode)
    .json({ message: customError.message });
};

export default errorHandlerMiddleware;
