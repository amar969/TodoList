import React from 'react'

export const InputTask = () => {

    const [task, setTask] = React.useState("")

    const handleChange = (e) => {
        e.preventDefault()
        
    }

    return (
        <>
        <form onSubmit={handleChange}>
        <input type="text" placeholder="Enter task"/>
        <input type="checkbox" name="" id="" />
        <button type="submit" > Submit Task </button>
        </form>
        </>
    )
}