import { GET_PROFILE_LOADING, GET_PROFILE_FAILURE, LOGIN, LOGOUT, GET_PROFILE_SUCCESS } from "./actionType"

const initialState = {
    user: "",
    profile: {},
    isLoading: false, 
    isError: false
}

export const reducer = (store = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return{
                ...store, 
                user: store.user + action.payload,
                isLoading: false, 
                isError:  false,
            }
        
        case LOGOUT: 
            return{
                ...store, 
                users: store.user = null,
                profile: store.profile = {},
                isLoading: false, 
                isError: false
            } 
        
        case GET_PROFILE_LOADING: 
            return{
                ...store,
                isLoading: true,
                isError: false, 
                user: ""
            }
        
        case GET_PROFILE_FAILURE: 
            return{
                ...store, 
                isLoading: false, 
                isError: true, 
                user: ""
            }
        
        case GET_PROFILE_SUCCESS:
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                profile: action.payload
            }
        
        default:
            return store
    }
}


