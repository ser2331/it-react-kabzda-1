const ADD_TEXT = "ADD_TEXT"
const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT"


let initialState = {
    moreText: [{text: "ser2331", id:"0"}],
    newText: ""
}


const musicReducer = (state = initialState, action) => {
    let {type} = action
    switch (type) {
        case ADD_TEXT:
            return {
                ...state, moreText: [...state.moreText, {moreText: state.newText, id:state.moreText.length+1}],
                newText: "",
            }
        case UPDATE_NEW_TEXT:
            return {
                ...state,
                newText: action.newNText
            }
        default:
            console.log('Unknown action type!');
            break;
    }
    return state
}
export const AddTextAR = () => ({type: ADD_TEXT,})
export const NewTextAR = (onText) => ({type: UPDATE_NEW_TEXT, newNText: onText})
export default musicReducer