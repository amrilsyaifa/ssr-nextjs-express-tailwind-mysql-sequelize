import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GLobalContext";

export default function Toast({ position }) {
  const toast = useContext(GlobalContext);
  const positionToast =
    position == "top-left"
      ? "top-0 left-0"
      : position == "top-right"
      ? "top-0 right-0"
      : position == "bottom-left"
      ? "bottom-0 left-0"
      : "bottom-0 right-0";
  const bgToast =
    toast.type === "error"
      ? "bg-red-500"
      : toast.type === "warning"
      ? "bg-yellow-500"
      : toast.type === "success"
      ? "bg-green-500"
      : null;
  const positionElement =
    position == "top-left" || position == "bottom-left" ? (
      <label
        className={
          "overflow-hidden truncate close flex items-start justify-start max-w-xl p-2 min-h-full rounded shadow-lg text-white " +
          bgToast
        }
        title="close"
        //   for="footertoast"
      >
        <div className="flex-1 mx-6">{toast.text}</div>
        <div
          onClick={() => toast.onClose()}
          className={"w-3 absolute mx-2 my-2 top-0 left-0 cursor-pointer"}
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
        </div>
      </label>
    ) : (
      <label
        className={
          "overflow-hidden truncate close flex items-start justify-start  max-w-xl p-2 min-h-full rounded shadow-lg text-white " +
          bgToast
        }
        //   for="footertoast"
      >
        <div className="flex-1">{toast.text}</div>
        <div
          onClick={() => toast.onClose()}
          className={"w-3 absolute mx-2 my-2 top-0 right-0 cursor-pointer"}
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
        </div>
      </label>
    );
  return (
    <div>
      {toast.toast && (
        <div
          className={
            "alert-toast fixed m-8 w-4/6 md:w-full max-w-sm " + positionToast
          }
        >
          <input type="checkbox" className="hidden" id="footertoast" />

          {positionElement}
        </div>
      )}
    </div>
  );
}
