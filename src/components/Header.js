import { useState } from "react";
import { RES_LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const isOnline = useOnlineStatus();
  const cart = useSelector((store) => store?.cart?.items);

  return (
    <div className="flex justify-between items-center border-b px-8 shadow-lg bg-rose-600 ">
      <div>
        <h1 className="my-8 font-extrabold text-3xl">SWIZZY</h1>
        {/* <img
          className="w-26" 
          src={RES_LOGO}
        /> */}
      </div>
      <nav className="navbar">
        <ul className="flex">
          <li className="m-2 p-2">Status: {isOnline ? "🟢" : "🔴"}</li>
          <li className="m-2 p-2 font-bold hover:text-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2 font-bold hover:text-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="m-2 p-2 font-bold hover:text-gray-600">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="m-2 p-2 font-bold hover:text-gray-600 ">
            <Link to="/cart">Cart ({cart?.length})</Link>
          </li>
          <button
            className="m-2 font-bold hover:text-gray-600 p-2 w-14 cursor-pointer"
            onClick={() =>
              login === "Login" ? setLogin("Logout") : setLogin("Login")
            }
          >
            {login}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
