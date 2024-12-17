import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="navBar mt-2">
        <div className="navList flex justify-between px-5 ">
          <Link to="/">
            <h1 className="text-3xl font-bold">BDS</h1>
          </Link>
          <ul className="flex  justify-between gap-4 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "  text-orange-400 " : "hover:bg-black"}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/productpage"
                className={({ isActive }) =>
                  `${isActive ? "  text-orange-400 " : "hover:bg-black"}`
                }
              >
                Products
              </NavLink>
            </li>

            <li className="px-4">
              <NavLink
                to="/cartpage"
                className={({ isActive }) =>
                  `${isActive ? "  text-orange-400 " : "hover:bg-black"}`
                }
              >
                Cart
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/aboutpage"
                className={({ isActive }) =>
                  `${isActive ? "  text-orange-400 " : "hover:bg-black"}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
