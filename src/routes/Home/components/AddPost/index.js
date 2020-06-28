import React from "react";
import { connect } from "react-redux";

import { addPost } from "../../../../core/store/posts/actions";

import "./styles.css";

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      // date: "",
    };
  }

  handleSubmit = (e) => {
    const { title, text } = this.state;
    e.preventDefault();
    if (!title || !text) return;
    const { profileEmail, profileId, profileName } = this.props;
    this.props.addPost({ ...this.state, profileEmail, profileId, profileName });
    this.setState((state) => ({
      title: "",
      text: "",
    }));
  };

  handleChange = (fieldName) => {
    return (e) => {
      this.setState({ [fieldName]: e.target.value });
      // this.setState({ date: getDateTime() });
    };
  };

  render() {
    return (
      <div className="main__block">
        <h1>Add Post</h1>
        <form className="add__post__form">
          <input
            type="text"
            className="post__name"
            placeholder="Post title"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
          <textarea
            className="post__body"
            placeholder="Post body"
            value={this.state.text}
            onChange={this.handleChange("text")}
          ></textarea>
          <button onClick={this.handleSubmit} className="send__post__btn">
            Add post
          </button>
        </form>
      </div>
    );
  }
}

// function getDateTime() {
//   const today = new Date();
//   const date = `${today.getFullYear()}-${
//     today.getMonth() + 1
//   }-${today.getDate()}`;
//   const time = `${today.getHours()}:${today.getMinutes()}`;
//   return `Date: ${date} Time: ${time}`;
// }

const stateToProps = (state) => ({
  profileId: state.auth.id,
  profileName: state.auth.name,
  profileEmail: state.auth.email,
});

const dispatchToProps = (dispatch) => ({
  addPost: (data) => dispatch(addPost(data)),
});

export default connect(stateToProps, dispatchToProps)(AddPost);
