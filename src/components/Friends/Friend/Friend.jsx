import React from "react";
import s from "./Friend.module.css"
import FriendData from "./FriendData/FriendData";

const Friend = (props) => {
    let state = props.friendPage
    let friendElement = state.friend.map(f => (<FriendData  surname={f.surname} ages={f.ages} key={f.id}/>))
    return (
        <div className={s.item}>
            {friendElement}
        </div>
    )
}
export default Friend;