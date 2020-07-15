import React from "react";

export default function Search() {
  return (
    <div>
      <div className="p-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />

          <div className="p-4">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
              icon
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="flex border-grey-light border">
        <input
          className="w-full rounded ml-1"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-grey-lightest border-grey border-l shadow hover:bg-grey-lightest">
          <span className="w-auto flex justify-end items-center text-grey p-2 hover:text-grey-darkest">
            <i className="material-icons text-xs">search</i>
          </span>
        </button>
      </div>
      <br />
      <div className="bg-white shadow p-4 flex">
        <span className="w-auto flex justify-end items-center text-gray-500 p-2">
          <i className="material-icons text-3xl">search</i>
        </span>
        <input
          className="w-full rounded p-2"
          type="text"
          placeholder="Try 'Los Angeles'"
        />
        <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4">
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>
      <br />
      <div className="shadow flex">
        <input
          className="w-full rounded p-2"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}
