import ProductDetail from "../componets/ProductDetail/ProductDetail";
import { loaderRequest } from "../shared/utils/loaderRequest";

function ProductPage() {
  return <ProductDetail />;
}

export default ProductPage;

export async function loader({ params }) {
  const product = await loaderRequest(`/api/v1/products/${params.id}`);

  return { product };
}
