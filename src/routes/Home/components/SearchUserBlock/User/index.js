import React from "react";
import subscribe from "./img/subscribe.svg";
import "./styles.css";

const User = ({ id, name }) => {
  return (
    <div className="single__user" key={id}>
      <div className="user__name">{name}</div>
      <img className="img__heart" alt="subscribed" src={subscribe} />
    </div>
  );
};

export default User;
