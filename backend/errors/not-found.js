import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customError.js";

// NotFoundError, CustomAPIError'dan türetiliyor
// Amaç: 404 (Not Found) hatalarını özel olarak yönetmek
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message); // üst sınıfa mesajı gönder
    this.statusCode = StatusCodes.NOT_FOUND; // 404
  }
}

export default NotFoundError; // diğer dosyalarda kullanabilmek için export
