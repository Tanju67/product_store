import { Link } from "react-router-dom";

function ProductItem({ prod }) {
  return (
    <li className="flex w-full flex-col gap-2 rounded-xl bg-gray-300 shadow-md transition-all duration-300 hover:-translate-y-2.5 sm:w-[45%] md:w-[30%] dark:bg-gray-700">
      <div>
        <img
          className="h-[250px] w-full rounded-t-xl object-cover"
          src={prod.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <p className="font-bold text-emerald-500">{prod.name}</p>
          <p>{prod.price}$</p>
        </div>
        <Link
          to={`/products/${prod._id}`}
          className="w-full cursor-pointer rounded-lg bg-amber-500 py-2 text-center text-white transition-all duration-300 hover:bg-amber-600"
        >
          Details
        </Link>
      </div>
    </li>
  );
}

export default ProductItem;
