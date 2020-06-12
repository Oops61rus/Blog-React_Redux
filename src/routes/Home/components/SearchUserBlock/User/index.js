import React from "react";
import subscribe from "./img/subscribe.svg";
import unsubscribe from "./img/unsubscribe.svg";
import "./styles.css";
import {
  addSubscriber,
  removeSubscriber,
} from "../../../../../core/store/searchUsers/actions";
import { connect } from "react-redux";

class User extends React.Component {
  handleClick = () => {
    const {
      profileId,
      removeSubscriber,
      addSubscriber,
      id,
      following,
    } = this.props;
    following ? removeSubscriber(id, profileId) : addSubscriber(id, profileId);
  };

  render() {
    const { name, following } = this.props;
    return (
      <div className="single__user">
        <div className="user__name">{name}</div>
        <img
          className="img__heart"
          alt={following ? "subscribed" : "unsubscribed"}
          src={following ? subscribe : unsubscribe}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

const stateToProps = (state) => ({
  profileId: state.auth.id,
});

const dispatchToProps = (dispatch) => ({
  removeSubscriber: (id, profileId) =>
    dispatch(removeSubscriber(id, profileId)),
  addSubscriber: (id, profileId) => dispatch(addSubscriber(id, profileId)),
});

export default connect(stateToProps, dispatchToProps)(User);
