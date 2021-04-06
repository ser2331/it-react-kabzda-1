const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState = {
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: "8"},
        {id: "2", message: "It's my first post", likesCount: "32"},
    ],
    newPostText: "ser2331"
}
const profileReducer = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length + 1, message: state.newPostText, likesCount: 0},],
                newPostText: "",
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            console.log('Unknown action type!');
            break;
    }
    return state
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;