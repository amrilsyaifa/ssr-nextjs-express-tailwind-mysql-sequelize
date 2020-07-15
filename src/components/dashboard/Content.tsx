import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Toast from "../Alert/Toast";

export default function Content({ children, title }) {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Nav />
        <NavMobile />
        <div className="w-full overflow-x-hidden border-t flex flex-col z-50">
          <main className="w-full flex-grow p-6">
            <h1 className="text-3xl text-black pb-6">{title}</h1>
            {children}
            <Toast position="top-right" />
          </main>
        </div>
      </div>
    </div>
  );
}
