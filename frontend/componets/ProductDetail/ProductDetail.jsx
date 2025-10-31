import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSubmit } from "../../shared/hooks/useSubmit";

function ProductDetail() {
  const product = useLoaderData().product.data;
  const navigate = useNavigate();
  const { id } = useParams();
  const { submit, isLoading } = useSubmit();

  const deleteHandler = async () => {
    submit(`/api/v1/products/${id}`, "DELETE", null, () => {
      navigate("/");
    });
  };

  return (
    <div className="mx-auto max-w-[1154px]">
      <div className="flex flex-col gap-4 md:flex-row lg:gap-10">
        <div className="md:flex-1">
          <img
            className="h-[400px] w-full object-cover shadow-md"
            src={product?.image}
            alt={product?.name}
          />
        </div>
        <div className="md:flex-1">
          <div className="mb-2 flex items-center justify-between md:flex-col md:items-start">
            <h1 className="text-2xl font-bold text-emerald-500">
              {product.name}
            </h1>
            <h1>{product.price}$</h1>
          </div>
          <div className="mb-2 italic">
            <p>{product.description}</p>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <Link
              to={`/products/edit/${id}`}
              className="bg-emerald-500 p-2 transition-all duration-300 hover:bg-emerald-700"
            >
              <FaEdit />
            </Link>
            <button
              disabled={isLoading}
              onClick={deleteHandler}
              className="bg-emerald-500 p-2 transition-all duration-300 hover:bg-emerald-700"
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetail;
