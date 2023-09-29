import { blogData } from "@/constants/utls";
import Link from "next/link";
import React from "react";

function Blog() {
  function handleClick() {
    console.log("increment like count");
  }

  return (
    <>
      <h3 style={{ textAlign: "center" }}>blog posts</h3>
      <hr />
      {blogData.map((singleBlog) => (
        <div
          style={{
            padding: "2rem",
            margin: "2rem",
            border: "2px black solid ",
          }}
        >
          <h5>{singleBlog.title}</h5>
          <p>{singleBlog.blog}</p>
          <Link href={`/blog/${singleBlog.id}`}>See Details</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
