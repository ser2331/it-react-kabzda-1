import React from "react";
import s from "./FriendData.module.css"

const FriendData = (props) => {
    const friendIconUrl = "https://img.tsn.ua/cached/1553516088/tsn-9eec32dc4989e3515edf3aa709da07a2/thumbs/720x1260/02/7d/d38aeb144441b6324575f983f8ff7d02.jpeg";

    return <div className={s.data}>
            <img src={friendIconUrl} alt=""/>
            <div>{props.surname}</div>
            <div>{props.ages}</div>
    </div>


}
export default FriendData;