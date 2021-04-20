const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState={
    dialogs: [
        {id: "1", name: "Sergei"},
        {id: "2", name: "Irka"},
        {id: "3", name: "Artem"},
        {id: "4", name: "Artur"},
        {id: "5", name: "Dimych"},
        {id: "6", name: "Vova"}
    ],
    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "yo"},
    ],
    newMessageText: ""
}
const dialogsReducer = (state=initialState, action) => {
    const {type} = action;
    switch (type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, {id: state.messages.length + 1, message:state.newMessageText,}]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText:action.newText,
            }
        }
        default:
            console.log('Unknown action type!');
            break

    }
    return state
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer;