let initialState={
    friend: [
        {id: "1", surname: "serg", ages: "25 лет",},
        {id: "2", surname: "ira", ages: "18 лет",},
        {id: "3", surname: "artem", ages: "15 лет",},
    ]}


const friendReducer = (state=initialState, action) => {
    return state;
}
export default friendReducer;