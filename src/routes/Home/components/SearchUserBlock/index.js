import React from "react";
import { connect } from "react-redux";

import { searchUsers } from "../../../../core/store/searchUsers/actions";

import "./styles.css";
import UsersList from "./UsersList";

class SearchUserBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isShow: false,
    };
  }

  handleChange = (e) => {
    const { username } = this.state;
    this.setState({ username: e.target.value });
    if (!username.length) {
      return this.setState({ isShow: false });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { profileId, searchUsers } = this.props;
    const { username } = this.state;
    if (!username.length) {
      return this.setState({ isShow: false });
    }
    searchUsers(username, profileId).then(() => {
      this.setState({ isShow: true });
    });
  };

  render() {
    const { users } = this.props;
    const { isShow, username } = this.state;
    return (
      <div className="main__block">
        <h1>Homepage</h1>
        <div className="search__block">
          <input
            type="text"
            className="search__user"
            placeholder="Enter username"
            value={username}
            onChange={this.handleChange}
          />
          <button className="search__button" onClick={this.handleSubmit}>
            Search User
          </button>
        </div>
        {isShow && <UsersList items={users} />}
      </div>
    );
  }
}

const stateToProps = (state) => ({
  profileId: state.auth.id,
  users: state.users.list,
});

const dispatchToProps = (dispatch) => ({
  searchUsers: (searchedUser, profileId) =>
    dispatch(searchUsers(searchedUser, profileId)),
});

export default connect(stateToProps, dispatchToProps)(SearchUserBlock);
