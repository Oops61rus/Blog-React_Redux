import React from "react";

import Post from "../Post";

import "./styles.css";

const PostsList = ({ items }) => {
  return (
    <div className="posts__list">
      <Post items={items} />
    </div>
  );
};

export default PostsList;
