const initialState = {
    userArr: []
}

export default function userDetails(state=initialState, action){
    if(action.type = "setUserDetails"){
        let arr = action.payload;
        return {
            userArr : arr
        }
    }
    return state;
}