import React from 'react';

const Navbar = () => {

const menuItem = (
  <>
    <li>
      <a className="font-bold m-2 ">Rent</a>
    </li>
    <li>
      <a className="font-bold m-2">Buy</a>
    </li>
    <li>
      <a className="font-bold m-2">Sell</a>
    </li>
    <li tabindex="0">
      <a className="font-bold m-2">
        Manage Property
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </a>
      <ul class="p-2">
        <li>
          <a className="font-bold m-2">Submenu 1</a>
        </li>
        <li>
          <a className="font-bold m-2">Submenu 2</a>
        </li>
      </ul>
    </li>
    <li>
      <a className="font-bold m-2">Resources</a>
    </li>
  </>
);

    return (
      <div className="bg-base-100">
        <div class=" navbar  container mx-auto">
          <div class="navbar-start ">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {menuItem}
              </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl font-bold">Estatery</a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">{menuItem}</ul>
          </div>
          <div class="navbar-end ">
            <button class="btn btn-outline btn-primary m-2 hover:text-white">Login</button>
            <button class="btn btn-outline btn-primary hover:text-white">Sign Up</button>
          </div>
        </div>
      </div>
    );
};

export default Navbar;