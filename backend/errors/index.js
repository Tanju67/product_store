// Tüm özel hata sınıflarını tek bir yerden toplamak için index.js oluşturuyoruz

import CustomAPIError from "./customError.js";
import BadRequest from "./BadRequest.js";
import NotFoundError from "./not-found.js";

// Export ederek diğer dosyalarda şu şekilde kullanılabilir:
// import { BadRequest, NotFoundError } from "../errors";
export { CustomAPIError, BadRequest, NotFoundError };
