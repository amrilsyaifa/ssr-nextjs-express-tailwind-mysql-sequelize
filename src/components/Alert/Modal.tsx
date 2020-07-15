import React from "react";

export function AlertWarning({ show, onClose, name, onContinue }) {
  const setOpacity = show ? "" : "opacity-0 pointer-events-none";
  return (
    <div
      className={
        "modal  fixed w-full h-full top-0 left-0 flex items-center justify-center " +
        setOpacity
      }
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto max-w-xs">
        <div className="relative max-w-xs bg-white rounded-lg py-8 shadow-lg flex flex-col items-center justify-center">
          <button
            onClick={() => onClose()}
            className="w-8 ml-auto mt-2 absolute right-0 top-0"
          >
            <i className="fas fa-times text-gray-500 hover:text-gray-700"></i>
          </button>
          <div className="w-16 h-16 bg-red-400 rounded-full flex justify-center items-center">
            <i className="fas fa-exclamation-triangle text-white text-4xl"></i>
          </div>
          <p className="text-red-400 font-bold mt-5 text-center">
            Apakah kamu yakin akan menghapus data {name} ?
          </p>
          <div className="flex-row">
            <button
              onClick={() => onClose()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6  m-2"
            >
              Batal
            </button>
            <button
              onClick={() => onContinue()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6 btn-gradient-warning m-2"
            >
              Lanjutkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AlertSuccess() {
  return (
    <div className="relative max-w-xs bg-white rounded-lg py-8 shadow-lg flex flex-col items-center justify-center">
      <button className="w-8 ml-auto mt-2 absolute right-0 top-0">
        <i className="text-gray-500 hover:text-gray-700">X</i>
      </button>
      <div className="w-16 h-16 bg-red-400 rounded-full flex justify-center items-center">
        <i className="material-icons text-white">done</i>
      </div>
      <p className="text-red-400 font-bold mt-5">Thank you,</p>
      <p className="text-xs text-center text-gray-600 mt-1">
        Lorem ipsum dolor sit amet.
      </p>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-6 btn-gradient">
        continue
      </button>
    </div>
  );
}
