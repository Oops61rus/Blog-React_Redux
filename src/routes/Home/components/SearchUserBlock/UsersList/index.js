import React from "react";

import User from "../User";

import "./styles.css";

const UsersList = ({ items }) => {
  return (
    <div className="userlist__block">
      {items.length > 0 ? (
        items.map((user) => <User id={user.id} key={user.id} name={user.name} following={user.following} />)
      ) : (
        <div className="error">Users not found!</div>
      )}
    </div>
  );
};

export default UsersList;
