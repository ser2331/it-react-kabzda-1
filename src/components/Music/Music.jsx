import React from "react";
import Text from "./Text/Text";
import Post from "../Profile/MyPosts/Posts/Post";


const Music = (props) => {
    let textElements = props.moreText.map(t => <Text text={t.text}/>)
    // let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
    let onTextAdd=()=>{
        props.addText()
    }
    let onTextChange = (e) => {
        let onText = e.target.value;
        props.newOnText(onText);
    }
    return <div>
        <div>
            {textElements}
        </div>
        <textarea onChange={(e)=>onTextChange(e)} value={props.newText}/>
        <button onClick={onTextAdd}>Добавить текст</button>
    </div>
}




export default Music;
