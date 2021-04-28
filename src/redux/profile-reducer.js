const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SER_USERS_PROFILE"
const LOOK="LOOK"
const UNLOOK="UNLOOK"
let initialState = {
    posts: [
        { id: "1", message: "Hi, how are you?", likesCount: "8" },
        { id: "2", message: "It's my first post", likesCount: "32" },
    ],
    newPostText: "ser2331",
    profile: null
}
const profileReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 },],
                newPostText: "",
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case LOOK: {
                return {
                    ...state,
                    profile: state.profile.map(p => {
                        if (p.id === action.userId) {
                            return {...p, followed: true}
                        }
                        return p
                    }),
                }
            }
            case UNLOOK: {
                return {
                    ...state,
                    profile: state.profile.map(p => {
                        if (p.id === action.userId) {
                            return {...p, followed: false}
                        }
                        return p
                    }),
                }
            }
        default:
            console.log('Unknown action type!');
            break;
    }
    return state
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const look = (userId) => ({type: LOOK, userId})
export const unlook = (userId) => ({type: UNLOOK, userId})
export default profileReducer;