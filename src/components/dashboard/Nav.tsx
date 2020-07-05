import React from "react";
import { useState } from "react";

export default function Nav() {
  const [showMenuAccount, setShowMenuAccount] = useState(false);
  const invisible = !showMenuAccount ? "invisible" : "";
  return (
    <nav className="absolute shadow bg-gray-800 w-full flex p-4 px-6 items-center flex-row justify-between">
      <div className="relative w-3/12  px-6 ml-16">
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
          className="block w-full bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-full pl-12 pr-4 py-3"
          // onClick={() => setShowMenuAccount(!showMenuAccount)}
        />
      </div>
      <div className="flex relative inline-block pr-6">
        <div className="relative text-sm">
          <button
            id="userButton"
            className="flex items-center focus:outline-none mr-3"
            onClick={() => setShowMenuAccount(!showMenuAccount)}
          >
            <img
              className="w-8 h-8 rounded-full mr-4"
              src="http://i.pravatar.cc/300"
              alt="Avatar of User"
            />{" "}
            <span className="hidden md:inline-block text-gray-400">
              Hi, User{" "}
            </span>
            <svg
              className="pl-2 h-2"
              version="1.1"
              viewBox="0 0 129 129"
              enableBackground="new 0 0 129 129"
            >
              <g>
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"></path>
              </g>
            </svg>
          </button>
          <div
            id="userMenu"
            className={
              "bg-gray-800 nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 " +
              invisible
            }
          >
            <ul className="list-reset">
              <li>
                <a
                  href="#"
                  className="px-4 py-2 block text-gray-400 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
                >
                  My account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 block text-gray-400 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
                >
                  Notifications
                </a>
              </li>
              <li>
                <hr className="border-t mx-2 border-gray-400" />
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 block text-gray-400 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
