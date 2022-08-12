import { GET_PROFILE_LOADING, GET_PROFILE_FAILURE, LOGIN, LOGOUT, GET_PROFILE_SUCCESS,   TODODATA, INPROGRESSDATA, DONEDATA, IN_PROGRESS_PERSONAL_COUNT, TODO_PERSONAL_COUNT, DONE_PERSONAL_COUNT } from "./actionType"

const initialState = {
    user: "",
    profile: {},
    isLoading: false, 
    isError: false, 
    inProgressPersonalCount: 0, 
    todoPersonalCount: 0, 
    donePersonalCount: 0,
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
        
        case IN_PROGRESS_PERSONAL_COUNT: 
            return{
                ...store,
                isLoading: false, 
                isError: false, 
                inProgressPersonalCount: store.inProgressPersonalCount + action.payload   
            }
        
        case TODO_PERSONAL_COUNT: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                todoPersonalCount: store.todoPersonalCount + action.payload
            }
        
        case DONE_PERSONAL_COUNT: 
            return{
                ...store, 
                isLoading: false, 
                isError: false, 
                donePersonalCount: store.donePersonalCount + action.payload
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


