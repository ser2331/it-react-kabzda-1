import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    const postIconUrl = "https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg";

    return <div>
        <div className={s.item}>
            <img src={postIconUrl} alt=""/>
            {props.message}
            <div>
                <span>like </span> {props.likesCount}
            </div>


        </div>
    </div>

}
export default Post;