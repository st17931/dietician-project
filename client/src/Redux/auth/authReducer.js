let initialState = {
    isAdmin: false,
    isUser: false
}


export default function authReducer(state=initialState, action){
    if(action.type == "ADMIN_LOGIN_SUCCESS"){
        return{
            ...state,
            isAdmin:true
        }
    }else if(action.type == "USER_LOGIN_SUCCESS"){
        return{
            ...state,
            isUser:true
        }
    }
    return state;
}