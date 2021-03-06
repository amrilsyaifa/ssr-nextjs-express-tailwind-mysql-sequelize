import React from "react";
import { useCallback, useEffect } from "react";

export default function Modal({
  show,
  title,
  onClose,
  onAction,
  children,
  size,
}) {
  const setOpacity = show ? "" : "opacity-0 pointer-events-none";
  const sizeModal =
    size === "small"
      ? "md:max-w-md"
      : size === "mid-size"
      ? "md:max-w-xl"
      : size === "big"
      ? "md:max-w-2xl"
      : size === "large"
      ? "md:max-w-3xl"
      : size === "giant"
      ? "md:max-w-4xl"
      : "md:max-w-md";
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return (
    <div
      className={
        "modal  fixed w-full h-full top-0 left-0 flex items-center justify-center " +
        setOpacity
      }
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div
        className={
          "modal-container bg-white w-11/12 mx-auto rounded shadow-lg z-50 overflow-y-auto " +
          sizeModal
        }
      >
        <div
          onClick={() => onClose()}
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>

        {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
        <div className="modal-content py-4 text-left px-6">
          {/* <!--Title--> */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{title}</p>
            <div className="modal-close cursor-pointer z-50">
              <svg
                onClick={() => onClose()}
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          {/* <!--Body--> */}
          {children}

          {/* <!--Footer--> */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => onAction()}
              className=" px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
            >
              Simpan
            </button>
            <button
              onClick={() => onClose()}
              className=" modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
