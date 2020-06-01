import React from "react";

import "./styles.css";

const Post = ({ items }) => {
  return (
    items &&
    items.map((post) => (
      <div className="single__post" key={post.id}>
        <div className="post__title">{post.title}</div>
        <div className="post__date">{post.date}</div>
        <div className="post__text">{post.text}</div>
        <div className="post__author">{post.name}</div>
      </div>
    ))
  );
};

export default Post;
