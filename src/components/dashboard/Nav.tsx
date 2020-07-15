import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GLobalContext";

export default function Nav() {
  const [showMenuAccount, setShowMenuAccount] = useState(false);
  const invisible = !showMenuAccount ? "hidden" : "";
  const menu = useContext(GlobalContext);
  return (
    <div>
      {/* Desktop Header */}
      <header className="w-full flex items-center bg-gray-800 py-2 px-6  sm:flex">
        <div className="w-full flex flex-row">
          <button onClick={menu.handleOnPressMenu}>
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <div className="relative w-full px-6 ml-2">
            <div className="absolute h-10 mt-1 left-0 top-0 flex items-center pl-10">
              <svg
                className="h-4 w-4 fill-current text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>

            <input
              id="search-toggle"
              type="search"
              placeholder="search"
              className="block transition-all duration-500 ease-in-out w-1/6 hover:w-3/12  bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3"
              // onClick={() => setShowMenuAccount(!showMenuAccount)}
            />
          </div>
        </div>
        <div
          className="relative w-1/2 flex justify-end"
          onClick={() =>
            showMenuAccount && setShowMenuAccount(!showMenuAccount)
          }
        >
          <button
            onClick={() => setShowMenuAccount(!showMenuAccount)}
            className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          >
            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
          </button>
          <button
            className={
              "h-full w-full fixed inset-0 cursor-default " + invisible
            }
          ></button>
          <div
            className={
              "absolute w-32 bg-gray-800 rounded-lg shadow-lg py-2 mt-16 " +
              invisible
            }
          >
            <a href="#" className="block px-4 py-2 account-link text-white">
              Account
            </a>
            <a href="#" className="block px-4 py-2 account-link text-white">
              Support
            </a>
            <a href="#" className="block px-4 py-2 account-link text-white">
              Sign Out
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
