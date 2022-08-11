import { GET_PROFILE_FAILURE, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS, LOGIN,LOGOUT, IN_PROGRESS, TODO, DONE } from "./actionType";

export const login = (data) => ({
    type: LOGIN,
    payload: data
})

export const getProfileLoading = () => ({
    type: GET_PROFILE_LOADING
})

export const getProfileSuccess = (data) => ({
    type: GET_PROFILE_SUCCESS,
    payload: data
})

export const getProfileFailure = () => ({
    type: GET_PROFILE_FAILURE
})

export const inProgress = (data) => ({
    type: IN_PROGRESS,
    payload: data
})

export const todos = (data) => ({
    type: TODO, 
    payload: data
})

export const dones = (data) => ({
    type: DONE, 
    payload: data
})

export const logout = () => ({
    type: LOGOUT, 
})

export const getProfile = () => async(dispatch) => {
    try {
        dispatch(getProfileLoading())
        let res = await fetch("https://reqres.in/api/users/2");
        let data = await res.json();
        console.log(data)   
        dispatch(getProfileSuccess(data))
       
    } catch (error) {
        dispatch(GET_PROFILE_FAILURE)
    }
}

export const getInProgress = () => async(dispatch) => {
    try {
        dispatch(getProfileLoading())
        let res = await fetch("https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress&todo_cate=Personal")
        let data = await res.json()
        console.log(data)
        dispatch(inProgress(data.length))
    } catch (error) {
        console.log(error)
    }
}

export const getTodo = () => async(dispatch) => {
    try {
        dispatch(getProfileLoading())
        let res = await fetch("https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo&todo_cate=Personal")
        let data = await res.json()
        console.log(data)
        dispatch(todos(data.length))
    } catch (error) {
        console.log(error)
    }
}

export const getdone = () => async(dispatch) => {
    try {
        dispatch(getProfileLoading())
        let res = await fetch("https://notes-json-server-44.herokuapp.com/notes?todo_status=Done&todo_cate=Personal")
        let data = await res.json()
        console.log(data)
        dispatch(dones(data.length))
    } catch (error) {
        console.log(error)
    }
}

export const getInProgressPersonal = () => async(dispatch) => {
    try {
        dispatch(getProfileLoading())
        let res = await fetch("https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress&todo_cate=Personal")
        let data = await res.json()
        console.log(data)
        dispatch(dones(data.length))
    } catch (error) {
        console.log(error)
    }
}