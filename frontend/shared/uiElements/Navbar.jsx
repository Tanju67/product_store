import { useEffect, useState } from "react";
import { FaMoon, FaRegPlusSquare } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Dark class'ını html root'a ekliyoruz
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <nav className="mx-auto mb-10 max-w-[1154px] py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5 text-2xl font-bold text-amber-500 md:text-3xl lg:text-4xl">
          <Link to="/">
            {" "}
            <h1 className="">Product Store</h1>
          </Link>

          <GiShoppingCart />
        </div>
        <div className="flex items-center gap-4 text-lg md:text-xl">
          <Link to="/create">
            <FaRegPlusSquare className="cursor-pointer transition-all duration-300 hover:text-amber-400" />
          </Link>

          {darkMode ? (
            <FaSun
              className="cursor-pointer transition-all duration-300 hover:text-amber-400"
              onClick={() => setDarkMode(false)}
            />
          ) : (
            <FaMoon
              className="cursor-pointer transition-all duration-300 hover:text-amber-400"
              onClick={() => setDarkMode(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
