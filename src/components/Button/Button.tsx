import React from "react";
import IsEmpty from "../../../server/helper/IsEmpty";

export default function Outline({
  title,
  onClick,
  backgroundBtn,
  size,
  leftIcon,
}) {
  const background =
    `border-${backgroundBtn}-500 ` +
    `text-${backgroundBtn}-500 ` +
    `hover:bg-${backgroundBtn}-500 `;
  const sizeButton =
    size === "small"
      ? "text-xs"
      : size === "medium"
      ? "text-sm"
      : size === "large"
      ? "text-base"
      : size === "big"
      ? "text-lg"
      : "";
  return (
    <button
      onClick={onClick}
      className={
        "flex rounded-full items-center shadow border-2 px-4 py-1 hover:text-white  " +
        background +
        " " +
        sizeButton
      }
    >
      {!IsEmpty(leftIcon) && (
        <i className={"fas fa-fw mr-2 fa-" + leftIcon}></i>
      )}
      {title}
    </button>
  );
}
