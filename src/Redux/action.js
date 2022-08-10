import { GET_PROFILE_FAILURE, GET_PROFILE_LOADING, GET_PROFILE_SUCCESS, LOGIN,LOGOUT } from "./actionType";

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