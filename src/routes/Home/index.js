import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";

import "./styles.css";
import SearchUserBlock from "./components/SearchUserBlock";
import Sidebar from "./components/Sidebar";
import AddPost from "./components/AddPost";
import AllPosts from "./components/AllPosts";
import MyPosts from "./components/MyPosts";

class Home extends React.Component {
  render = () => {
    return (
      <main>
        <Sidebar />
        <Switch>
          <Route path="/" component={SearchUserBlock} exact />
          <Route path="/add-post" component={AddPost} exact />
          <Route path="/all-posts" component={AllPosts} exact />
          <Route path="/my-posts" component={MyPosts} exact />
        </Switch>
      </main>
    );
  };
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
