import { Outlet } from "react-router-dom";
import Navbar from "../shared/uiElements/Navbar";

function RootLayout() {
  return (
    <main className="min-h-screen bg-gray-200 px-4 text-gray-700 dark:bg-gray-800 dark:text-white">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default RootLayout;
