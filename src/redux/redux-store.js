import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendReducer from "./friend-reducer";
import usersReducer from "./users-reduser";
import musicReducer from "./music-reducer";
import authReducer from "./auth-reduser";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        friendPage: friendReducer,
        usersPage: usersReducer,
        auth:authReducer,
        // musicPage:musicReducer,
    }
)


let store = createStore(reducers);
export default store;


window.store = store;