import React from "react";

export default function Alert({ type, width, position, title, body }) {
  const widthScreen =
    width === "full-width"
      ? "w-full"
      : width === "width-half"
      ? "w-6/12"
      : width === "width-quarter"
      ? "w-3/12"
      : "";
  const positionToast =
    position == "top-left"
      ? "top-0 left-0"
      : position == "top-right"
      ? "top-0 right-0"
      : position == "bottom-left"
      ? "bottom-0 left-0"
      : "bottom-0 right-0";
  const bgColor =
    type === "danger"
      ? "bg-red-200"
      : type === "info"
      ? "bg-blue-200"
      : type === "warning"
      ? "bg-orange-200"
      : type === "success"
      ? "bg-green-200"
      : null;
  const bgColor2 =
    type === "danger"
      ? "bg-red-600"
      : type === "info"
      ? "bg-blue-600"
      : type === "warning"
      ? "bg-orange-600"
      : type === "success"
      ? "bg-green-600"
      : null;
  const textColor =
    type === "danger"
      ? "text-red-600"
      : type === "info"
      ? "text-blue-600"
      : type === "warning"
      ? "text-orange-600"
      : type === "success"
      ? "text-green-600"
      : null;

  return (
    <div
      className={
        "absolute flex p-4 " + bgColor + " " + widthScreen + " " + positionToast
      }
    >
      <div className="mr-4">
        <div
          className={
            "h-10 w-10 text-white rounded-full flex justify-center items-center " +
            bgColor2
          }
        >
          <i className="fas fa-check-circle fa-fw"></i>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className={textColor}>
          <p className="mb-2 font-bold">{title}</p>
          <p className="text-xs">{body}</p>
        </div>
        <div className="text-sm text-gray-500">
          <span>x</span>
        </div>
      </div>
    </div>
  );
}
