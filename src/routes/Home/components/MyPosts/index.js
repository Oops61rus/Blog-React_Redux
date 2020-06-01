import React from "react";
import { connect } from "react-redux";

import { loadPosts } from "../../../../core/store/posts/actions";
import PostsList from "../PostsList";

import "./styles.css";

class MyPosts extends React.Component {
  componentDidMount() {
    const { profileId, loadPosts } = this.props;
    loadPosts(profileId);
  }

  render() {
    return (
      <div className="main__block">
        <h1>My posts</h1>
        <PostsList items={this.props.posts} />
      </div>
    );
  }
}

const stateToProps = (state) => ({
  profileId: state.auth.id,
  posts: state.posts.list,
});

const dispatchToProps = (dispatch) => ({
  loadPosts: (profileId) => dispatch(loadPosts(profileId)),
});

export default connect(stateToProps, dispatchToProps)(MyPosts);
