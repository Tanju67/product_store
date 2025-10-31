import { useRouteError } from "react-router-dom";
import Navbar from "../../shared/uiElements/Navbar";

function Error() {
  const error = useRouteError();
  console.log(error);

  let title = "An error occurred!";
  let message = "Something went wrong!";

  // JSON body varsa çekelim
  if (error?.data) {
    try {
      const parsed = JSON.parse(error.data);
      message = parsed.message || message;
    } catch (err) {
      console.log(err);
    }
  }

  if (error.status === 404) {
    title = "Not found";
    message = error.data || "Could not find resource.";
  } else if (error.status === 429) {
    title = "Too many requests";
    message = "Please try again later.";
  }

  return (
    <div className="min-h-screen bg-gray-200 px-4 text-gray-700 dark:bg-gray-800 dark:text-white">
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="mb-4 text-2xl font-bold">{title}</h1>
        <p className="text-gray-700 dark:text-gray-300">{message}</p>
      </main>
    </div>
  );
}

export default Error;
