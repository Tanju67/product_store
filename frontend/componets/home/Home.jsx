import { Link, useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";

function Home() {
  const products = useLoaderData().products;

  if (products.data.length === 0) {
    return (
      <div className="mx-auto mt-20 min-h-[80vh] max-w-[1154px] text-center">
        <div>
          <p>
            {products.message}.{" "}
            <Link
              to="/create"
              className="transition-all duration-300 hover:text-amber-400"
            >
              Add some products.
            </Link>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-[1154px]">
      <ul className="flex flex-col flex-wrap gap-10 sm:flex-row">
        {products.data.map((prod) => (
          <ProductItem key={prod._id} prod={prod} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
