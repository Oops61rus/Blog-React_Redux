import React from "react";

import Post from "../Post";

import "./styles.css";

const PostsList = ({ items }) => {
  return (
    <div className="posts__list">
      {items.length > 0 ? (
        items.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            text={post.text}
            date={post.date}
            name={post.name}
          />
        ))
      ) : (
        <div className="error">Posts not found!</div>
      )}
    </div>
  );
};

export default PostsList;
