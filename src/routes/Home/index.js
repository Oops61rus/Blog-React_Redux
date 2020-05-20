import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      profileName: "",
      username: "",
      userlist: [],
    };
  }

  handleChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username.length === 0) {
      return;
    }
  };

  render = () => {
    return (
      <main>
        <h1>Homepage</h1>
        <div className="left__panel">
          <div className="actions">
            <a href="#" className="profile__name"></a>
            <div className="posts">
              <a href="#" className="friends__posts">
                All posts
              </a>
              <a href="#" className="my__posts">
                My posts
              </a>
              <a href="#" className="add__post">
                Add post
              </a>
            </div>
          </div>
          <Link
            to="/signIn"
            onClick="handleLogout"
            className="logout"
            type="submit"
          >
            Log out
          </Link>
        </div>
        <div className="main__block">
          <div className="search__block">
            <input
              type="text"
              className="search__user"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <button className="search__button" onClick={this.handleSubmit}>
              Search User
            </button>
          </div>
          <div className="userlist__block">{this.state.userlist}</div>
        </div>
      </main>
    );
  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
