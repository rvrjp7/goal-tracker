const initialState={
    logInState: false
}
const rootReducer=(state=initialState, action)=>{
    switch (action.type) {
        case "logInState":
            return {...state, logInState: action.value}
        default:
            return state;
    }
}
export default rootReducer;