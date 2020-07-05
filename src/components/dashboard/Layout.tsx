import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import Content from "./Content";

export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <Nav />
      <Content>{children}</Content>
    </div>
  );
}
