import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import EditProductPage, {
  loader as editProductPageLoader,
} from "../pages/EditProductPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage, { loader as homePageLoader } from "../pages/HomePage";
import ProductPage, { loader as productPageLoader } from "../pages/ProductPage";
import RootLayout from "../pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader,
      },
      {
        path: "/products/edit/:id",
        element: <EditProductPage />,
        loader: editProductPageLoader,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
        loader: productPageLoader,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
