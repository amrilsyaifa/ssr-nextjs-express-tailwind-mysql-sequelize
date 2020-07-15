import React from "react";

export default function Tabs({ children }) {
  const tabsActiveLi = "-mb-px";
  const tabsActiveA = "border-l border-t border-r rounded-t";
  return (
    <div>
      <ul className="list-reset flex border-b">
        <li className={"mr-1 "}>
          <a
            className="bg-white inline-block py-2 px-4 text-blue-400 font-semibold hover:text-blue-600"
            href="#"
          >
            Active
          </a>
        </li>
        <li className={"mr-1 " + tabsActiveLi}>
          <a
            className={
              "bg-white inline-block py-2 px-4 text-blue-800 font-semibold " +
              tabsActiveA
            }
            href="#"
          >
            Tab
          </a>
        </li>
        <li className={"mr-1 "}>
          <a
            className="bg-white inline-block py-2 px-4 text-blue-400 hover:text-blue-800 font-semibold"
            href="#"
          >
            Tab
          </a>
        </li>
        <li className={"mr-1 "}>
          <a
            className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold cursor-not-allowed"
            href="#"
          >
            Tab
          </a>
        </li>
      </ul>
      {children}
    </div>
  );
}
