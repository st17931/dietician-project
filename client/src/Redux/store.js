import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authReducer"
import userDetails from "./userDetails/userDetails";


const store = configureStore({
    reducer:{
        loginDetail: authReducer,
        allUser: userDetails
    }
})

export default store;