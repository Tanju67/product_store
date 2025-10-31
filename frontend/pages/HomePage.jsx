import Home from "../componets/home/Home";
import { loaderRequest } from "../shared/utils/loaderRequest";

function HomePage() {
  return <Home />;
}

export default HomePage;

export async function loader() {
  const products = await loaderRequest("/api/v1/products");
  return { products };
}
