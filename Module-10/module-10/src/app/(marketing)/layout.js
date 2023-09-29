import Navbar from "@/conponents/Navbar";
import React from "react";

function HomeLayout({ children }) {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      {children}
    </div>
  );
}

export default HomeLayout;
