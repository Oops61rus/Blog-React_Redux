import React from "react";
// import { connect } from "react-redux";

import "./styles.css";

class SearchUserBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div className="main__block">
        <h1>Homepage</h1>
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
    );
  }
}

export default SearchUserBlock;
