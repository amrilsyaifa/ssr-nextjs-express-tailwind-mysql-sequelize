import React from "react";

export default function Modal2() {
  return (
    <div>
      <div className="p-16">
        <div className="bg-white py-16 rounded-lg shadow-xl relative max-w-sm">
          <p className="text-center text-gray-700 font-bold text-4xl">
            You are banned
          </p>
          <p className="text-gray-600 text-lg text-center">
            Please stop spamming other people.
          </p>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-red-500 text-white font-bold px-8 py-2 rounded-lg hover:opacity-75">
              close
            </button>
          </div>
          <div className="absolute w-full">
            <svg
              className="fill-current text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill-opacity="1"
                d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,
96L1440,320L1320,320C1200,320,960,320,720,
320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
            <div className="h-6 w-full bg-red-500 rounded-b-lg"></div>
          </div>
        </div>
      </div>
      <br />
      <div className="p-8">
        <div className="bg-white rounded-lg shadow-xl max-w-sm">
          <div className="h-64 bg-blue-500 flex justify-center items-center rounded-t-lg">
            <div className="h-24 w-24 bg-white rounded-full flex justify-center items-center">
              <i className="material-icons text-blue-500">done</i>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="fill-current"
          >
            <path
              fill="#4299E1"
              fill-opacity="1"
              d="M0,64L80,85.3C160,107,320,149,480,154.7C640,160,800,128,960,112C1120,96,1280,
96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,
640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
          <div className="p-8 -mt-12">
            <p className="font-bold text-center text-4xl text-gray-700">
              Thank you
            </p>
            <p className="text-gray-600 text-center mt-5">
              Your order has been placed. We'll send you an email.
            </p>
            <div className="flex justify-center mt-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="relative max-w-xs bg-white rounded-lg py-8 shadow-lg flex flex-col items-center justify-center">
        <button className="w-8 ml-auto mt-2 absolute right-0 top-0">
          <i className="text-gray-500 hover:text-gray-700">X</i>
        </button>
        <div className="w-16 h-16 bg-blue-400 rounded-full flex justify-center items-center">
          <i className="material-icons text-white">done</i>
        </div>
        <p className="text-blue-400 font-bold mt-5">Thank you,</p>
        <p className="text-xs text-center text-gray-600 mt-1">
          Lorem ipsum dolor sit amet.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 btn-gradient">
          continue
        </button>
      </div>
    </div>
  );
}
