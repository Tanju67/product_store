import EditProduct from "../componets/editProduct/EditProduct";
import { loaderRequest } from "../shared/utils/loaderRequest";

function EditProductPage() {
  return <EditProduct />;
}

export default EditProductPage;

export async function loader({ params }) {
  const product = await loaderRequest(`/api/v1/products/${params.id}`);

  return { product };
}
