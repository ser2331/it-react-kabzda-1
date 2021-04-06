import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendReducer from "./friend-reducer";
import usersReducer from "./users-reduser";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        friendPage: friendReducer,
        usersPage: usersReducer,
    }
)


let store = createStore(reducers);
export default store;


window.store = store;