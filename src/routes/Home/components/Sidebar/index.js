import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logOut } from "../../../../core/store/auth/actions";

import "./styles.css";

const Sidebar = ({ profileName, logOut }) => {
  return (
    <div className="left__panel">
      <div className="actions">
        <Link to="/" className="profile__name">
          {profileName}
          {localStorage.getItem("profileName")}
        </Link>
        <div className="posts">
          <Link to="/all-posts" className="all__posts">
            All posts
          </Link>
          <Link to="/my-posts" className="my__posts">
            My posts
          </Link>
          <Link to="/add-post" className="add__post">
            Add post
          </Link>
        </div>
      </div>
      <button onClick={logOut} className="logout">
        Log out
      </button>
    </div>
  );
};

const dispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

const stateToProps = (state) => ({
  profileName: state.auth.name
})

export default connect(stateToProps, dispatchToProps)(Sidebar);
