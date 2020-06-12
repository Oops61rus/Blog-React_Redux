import React from "react";
import { connect } from "react-redux";

import { loadFriendsPosts } from "../../../../core/store/posts/actions";
import PostsList from "../PostsList";

class AllPosts extends React.Component {
  componentDidMount() {
    const { profileId, loadFriendsPosts } = this.props;
    loadFriendsPosts(profileId);
  }

  render() {
    return (
      <div className="main__block">
        <h1>All Posts</h1>
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
  loadFriendsPosts: (profileId) => dispatch(loadFriendsPosts(profileId)),
});

export default connect(stateToProps, dispatchToProps)(AllPosts);
