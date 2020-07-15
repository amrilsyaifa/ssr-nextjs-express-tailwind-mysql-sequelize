import React from "react";

export default function Card({ children, variant }) {
  const variantBg = variant === "dark" ? "bg-gray-500" : "bg-white";
  return (
    <div
      className={"shadow hover:shadow-lg p-4 rounded w-full m-5 " + variantBg}
    >
      {children}
    </div>
  );
}
