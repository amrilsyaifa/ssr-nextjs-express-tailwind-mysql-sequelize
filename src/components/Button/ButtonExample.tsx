import React from "react";

export default function Button() {
  return (
    <div>
      <button className="mb-3 rounded-full flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
        Default rounded
      </button>
      <br />
      <button className="flex items-center shadow border-blue-500 border-2 rounded-full  px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
        Outline rounded
      </button>
      <br />
      {/* <!-- Primary --> */}
      <button className="flex items-center shadow bg-teal-500 px-4 py-2 text-white hover:bg-teal-400">
        Default Primary
      </button>
      <br />
      {/* <!-- Border bottom -->  */}
      <button className="bg-blue-500 py-2 px-4 border-b-4 border-blue-800 rounded text-white hover:border-blue-lighter hover:bg-blue-400">
        Default Border bottom
      </button>
      <br />
      {/* <!-- Border--> */}
      <button className="border-2 border-blue-500 px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded">
        <p>Default Border</p>
      </button>
      <br />
      {/* <!-- Line down --> */}
      <button className="mt-4 px-4 py-2 border-b-2 border-blue-400 font-bold text-blue-500 hover:border-blue-500">
        Default Line down
      </button>
      <br />
      {/* <!-- Button with icon --> */}
      <button className="flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
        <i className="fas fa-check-circle fa-fw mr-2"></i> Button with icon
      </button>
      <br />
      {/* <!-- Button with icon & badge --> */}
      <button className="flex items-center relative shadow bg-teal-500 pt-2 pb-2 pl-4 pr-4 text-white hover:bg-teal-400">
        <i className="fas fa-check-circle fa-fw mr-2"></i> Button with icon &
        badge
        <span className="absolute right-0 top-0 -mt-2 -mr-2 rounded-full bg-red-500 p-1 text-xs shadow w-6 h-6">
          12
        </span>
      </button>
      <br />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 btn-gradient">
        Button gradient
      </button>
    </div>
  );
}
