import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageText = state.newMessageText
    let addMessage = () => {
        props.addMessageAction();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageAction(text);
    }
    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
            <div className={s.add}>
                <textarea onChange={(e) => onMessageChange(e)} placeholder="enter your message"
                          value={newMessageText}/>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    </div>;
}
export default Dialogs;