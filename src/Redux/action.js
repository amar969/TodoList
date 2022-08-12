import {
  GET_PROFILE_FAILURE,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  LOGIN,
  LOGOUT,
  IN_PROGRESS_PERSONAL_COUNT,
  TODO_PERSONAL_COUNT,
  DONE_PERSONAL_COUNT,
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

export const inProgressPersonalCount = (data) => ({
  type: IN_PROGRESS_PERSONAL_COUNT,
  payload: data,
});

export const todosPersonalCount = (data) => ({
  type: TODO_PERSONAL_COUNT,
  payload: data,
});

export const donesPersonalCount = (data) => ({
  type: DONE_PERSONAL_COUNT,
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

export const getPersonalCount = () => async (dispatch) => {
    try {
      let res1 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Todo&todo_tag=Personal"
      );
      let data1 = await res1.json();
      console.log(data1.length);
      dispatch(todosPersonalCount(data1.length));
    } catch (error) {
      console.log(error);
    }

    try {
      let res2 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=In Progress&todo_tag=Personal"
      );
      let data2 = await res2.json();
      console.log(data2.length);
      dispatch(inProgressPersonalCount(data2.length));
    } catch (error) {
      console.log(error);
    }

    try {
      let res3 = await fetch(
        "https://notes-json-server-44.herokuapp.com/notes?todo_status=Done&todo_tag=Personal"
      );
      let data3 = await res3.json();
      console.log(data3.length);
      dispatch(donesPersonalCount(data3.length));
    } catch (error) {
      console.log(error);
    }
  };
