import React from "react";

const PostsList = ({ items }) => {
  return (
    <div className="posts__list">
      {items &&
        items.map((post) => (
          <div className="single__post" key={post.id}>
            <div className="post__title">{post.title}</div>
            <div className="post__date">{post.date}</div>
            <div className="post__text">{post.text}</div>
            <div className="post__author">{post.name}</div>
          </div>
        ))}
      )
    </div>
  );
};

export default PostsList;
