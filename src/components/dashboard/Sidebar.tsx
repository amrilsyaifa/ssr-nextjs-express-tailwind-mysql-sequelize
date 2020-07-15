import React from "react";
import { useState, useContext } from "react";
import Link from "next/link";
import { GlobalContext } from "../../context/GLobalContext";

export default function Sidebar() {
  const menu = useContext(GlobalContext);
  const showClassDiv =
    menu?.show === true ? "sidebar-show z-1" : "w-16 sidebar-hide z-40";
  return (
    <div
      className={
        "h-screen menu bg-black text-white px-4 flex items-center nunito shadow " +
        showClassDiv
      }
    >
      <ul className="list-reset ">
        <li className="my-2 md:my-0">
          <Link href="/dashboard">
            <a
              href="#"
              className={
                "py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 flex flex-row"
              }
            >
              <i className="fas fa-home fa-fw mr-3"></i>
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Home
              </span>
            </a>
          </Link>
        </li>
        <li className="my-2 md:my-0 ">
          <Link href="/dashboard/product">
            <a
              href="#"
              className={
                "py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 flex flex-row"
              }
            >
              <i className="fas fa-tasks fa-fw mr-3"></i>
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Produk
              </span>
            </a>
          </Link>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className={
              "py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 flex flex-row"
            }
          >
            <i className="fa fa-envelope fa-fw mr-3"></i>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm">
              Messages
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className={
              "py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 flex flex-row"
            }
          >
            <i className="fas fa-chart-area fa-fw mr-3 text-indigo-400"></i>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm">
              Analytics
            </span>
          </a>
        </li>
        <li className="my-2 md:my-0">
          <a
            href="#"
            className={
              "py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400 flex flex-row"
            }
          >
            <i className="fa fa-wallet fa-fw mr-3"></i>
            <span className="w-full inline-block pb-1 md:pb-0 text-sm">
              Payments
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
