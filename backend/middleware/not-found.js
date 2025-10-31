// Tanımlanmayan (yani route bulunamayan) istekleri yakalayan middleware
// Express'te tüm route'lar tanımlandıktan sonra en sonda kullanılır
const notFound = (req, res) => res.status(404).send("Route does not exist"); // 404 HTTP kodu ile mesaj döner

export default notFound; // diğer dosyalarda kullanabilmek için export ediyoruz
