import React from "react";

import "./styles.css";

const Post = ({ title, date, text, name }) => {
  return (
    <div className="single__post">
      <div className="post__title">{title}</div>
      <div className="post__date">{date}</div>
      <div className="post__text">{text}</div>
      <div className="post__author">{name}</div>
    </div>
  );
};

export default Post;
