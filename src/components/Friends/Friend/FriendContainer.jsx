// import React from "react";
import {connect} from "react-redux";
import Friend from "./Friend";

let mapStateToProps = (state) => {
    return {
        friendPage: state.friendPage
    }
}
const FriendContainer = connect(mapStateToProps)(Friend)
export default  FriendContainer
