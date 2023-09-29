import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Next Js Starter Project</h1>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyleType: "none",
          padding: "2rem",
        }}
      >
        <li>
          <Link href="/homepage">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
