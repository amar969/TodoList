import { GET_PROFILE_LOADING, GET_PROFILE_FAILURE, LOGIN, LOGOUT, GET_PROFILE_SUCCESS, IN_PROGRESS, TODO, DONE, TODODATA, INPROGRESSDATA, DONEDATA } from "./actionType"

const initialState = {
    user: "",
    profile: {},
    isLoading: false, 
    isError: false, 
    inProgress: 0, 
    todo: 0, 
    done: 0,
    todoData: [], 
    inProgressData: [], 
    doneData: []
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
        
        case IN_PROGRESS: 
            return{
                ...store,
                isLoading: false, 
                isError: false, 
                inProgress: store.inProgress + action.payload   
            }
        
        case TODO: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                todo: store.todo + action.payload
            }
        
        case DONE: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                done: store.done + action.payload
            }
        
        case TODODATA: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                todoData:[...action.payload]
            }
        
        case INPROGRESSDATA:
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                inProgressData:[...action.payload]
            }
        
        case DONEDATA: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                doneData: [...action.payload]
            }

        default:
            return store
    }
}


