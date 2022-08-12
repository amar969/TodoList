import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGOUT,
  IN_PROGRESS,
  TODO,
  DONE,
  TODODATA,
  INPROGRESSDATA,
  DONEDATA,
} from "./actionType";

export const login = (data) => ({
  type: LOGIN,
  payload: data,
});

export const getProfileLoading = () => ({
  type: GET_PROFILE_LOADING,
});

export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data,
});

export const getProfileFailure = () => ({
  type: GET_PROFILE_FAILURE,
});

export const inProgress = (data) => ({
  type: IN_PROGRESS,
  payload: data,
});

export const todos = (data) => ({
  type: TODO,
  payload: data,
});

export const dones = (data) => ({
  type: DONE,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const todosDatas = (data) => ({
  type: TODODATA,
  payload: data,
});

export const inProgressDatas = (data) => ({
    type: INPROGRESSDATA,
    payload: data
}) 

export const doneDatas = (data) => ({
    type: DONEDATA, 
    payload: data
})

export const getProfile = () => async (dispatch) => {
  try {
    dispatch(getProfileLoading());
    let res = await fetch("https://reqres.in/api/users/2");
    let data = await res.json();
    console.log(data);
    dispatch(getProfileSuccess(data));
  } catch (error) {
    dispatch(GET_PROFILE_FAILURE);
  }
};


export const getTodoData = () => async (dispatch) => {
    try {
        dispatch(getProfileLoading());
        let res = await fetch(
            "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo"
            );
            let data = await res.json();
            console.log(data);
            dispatch(todosDatas(data));
        } catch (error) {
            console.log(error);
        }
    };
    

export const getInProgress = () => async (dispatch) => {
    try {
        dispatch(getProfileLoading());
        let res = await fetch(
          "https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress"
        );
        let data = await res.json();
        console.log(data);
        dispatch(inProgressDatas(data));
    } 
    catch (error) {
        console.log(error);
    }
};

export const getDoneData = () => async(dispatch) => {
    try {
        
        dispatch(getProfileLoading());
        let res = await fetch(
            "https://notes-json-server-44.herokuapp.com/notes?todo_status=Done"
        )
        let data = await res.json()
        console.log(data)
        dispatch(doneDatas(data))
    } catch (error) {
        console.log(error)
    }
}