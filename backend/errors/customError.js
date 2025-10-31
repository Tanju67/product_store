// CustomAPIError, tüm özel API hatalarının temel sınıfı
// JavaScript'in built-in Error sınıfından türetiliyor
class CustomAPIError extends Error {
  constructor(message) {
    super(message); // Error sınıfına mesajı gönder
    // statusCode yok, bunu alt sınıflar (BadRequest, NotFoundError) belirleyecek
  }
}

export default CustomAPIError;
