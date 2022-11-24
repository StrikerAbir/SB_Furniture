import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/logo.png'
const NavBar = ({dark,setDark}) => {
  let activeStyle = {
    color: "black",
  };
  const menuItems = (
    <React.Fragment>
      <li className="font-semibold">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/blogs"
        >
          Blogs
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/categories"
        >
          Categories
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/Reviews"
        >
          Reviews
        </NavLink>
      </li>
      <div className="flex justify-center items-center">
        <input onClick={()=>setDark(!dark)} type="checkbox" className="toggle" />
      </div>
    </React.Fragment>
  );
  return (
    <div className="border-0 border-b border-warning">
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <div className='flex items-center'>
              <img className="w-10 pr-2" src={logo} alt="" />
              <h2>SB Furniture</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div>
          <label
            htmlFor="dashboardDrawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
