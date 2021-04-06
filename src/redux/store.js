// import profileReducer from "./profile-reducer";
// import friendReducer from "./friend-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: "1", message: "Hi, how are you?", likesCount: "8"},
//                 {id: "2", message: "It's my first post", likesCount: "32"},
//             ],
//             newPostText: "ser2331"
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: "1", name: "Sergei"},
//                 {id: "2", name: "Irka"},
//                 {id: "3", name: "Artem"},
//                 {id: "4", name: "Artur"},
//                 {id: "5", name: "Dimych"},
//                 {id: "6", name: "Vova"}
//             ],
//             messages: [
//                 {id: "1", message: "Hi"},
//                 {id: "2", message: "How are you?"},
//                 {id: "3", message: "yo"},
//             ],
//             newMessageText: ""
//         },
//         friendPage: {
//             friend: [
//                 {id: "1", surname: "serg", ages: "25 лет",},
//                 {id: "2", surname: "ira", ages: "18 лет",},
//                 {id: "3", surname: "artem", ages: "15 лет",},
//             ],
//         },
//     },
//     _callSubscriber() {
//         console.log("State changed")
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;  //observer
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.friendPage = friendReducer(this._state.friendPage, action)
//         this._callSubscriber(this._state);
//     }
// }
//
//
// export default store;
// window.store = store;
//
//
