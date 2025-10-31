import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customError.js";

// BadRequest, CustomAPIError'dan türetilen özel bir hata sınıfı
// Amacı: 400 HTTP hatalarını kolayca fırlatmak
class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message); // üst sınıfa mesajı gönder
    this.statusCode = StatusCodes.BAD_REQUEST; // 400 kodu
  }
}

export default BadRequest; // diğer dosyalarda kullanılabilir
