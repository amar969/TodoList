import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getdone, getInProgress, getTodo } from '../Redux/action';

export const Summary = () => {
    
    let dispatch = useDispatch()
    
    React.useState(() => {
        dispatch(getInProgress())
        dispatch(getTodo())
        dispatch(getdone())
    }, [])
    
    const inProgress = useSelector((state) => state.inProgress)
    const todo = useSelector((state) => state.todo)
    const done = useSelector((state) => state.done)
    console.log(inProgress)
    console.log(todo)
    console.log(done)
  
    return (
    <>
    <div>
        Todo - {todo}
    </div>

    <div>
       In Progress - {inProgress}
    </div>

    <div>
       Done - {done}
    </div>
    </>
  )
}
