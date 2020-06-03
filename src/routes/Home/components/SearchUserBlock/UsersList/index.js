import React from "react";

import User from "../User";

import "./styles.css";

const UsersList = ({ items }) => {
  return (
    <div className="userlist__block">
      {items.length > 0 ? (
        items.map((user) => <User id={user.id} name={user.name} />)
      ) : (
        <div className="error">Users not found!</div>
      )}
    </div>
  );
};

export default UsersList;
