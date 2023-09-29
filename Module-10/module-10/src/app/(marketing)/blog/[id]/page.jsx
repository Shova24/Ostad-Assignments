import { blogData } from "@/constants/utls";
import React from "react";

function SingleBlog({ params }) {
  const blog = blogData.find((item) => item.id === +params.id);
  return (
    <div>
      <h2>{blog.title}</h2>
      <hr />
      <p>{blog.blog}</p>
    </div>
  );
}

export default SingleBlog;
