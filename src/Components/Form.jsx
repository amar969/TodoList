import React from 'react'

const initialState = {
    title: "", 
    description: "", 
    date: "", 
    todo_status: "", 
    todo_cate: ""
}

export const Form = () => {
  
    const [data, setData] = React.useState(initialState)
    
    const handleChange = (e) => {
        const {name, value, checked, type} = e.target 
        value = type === "checked" ? checked : value

        setData({...data, [name] : value})
    }

    const {title, description, date, todo_status, todo_cate} = data
    
return (
    <>
    <form onSubmit={handleChange}>

        <input type="text" value={title} name="title" onChange={hanleChange} /> 
        <textare type="text" value={description} name="desc" onChange={hanleChange} /> 
        <textare type="date" value={date} name="date" onChange={hanleChange} /> 

        {/* radio */}
        <input type="radio" value="Todo" name={todo_status} onChange={handleChange} /> 
        <input type="radio" value="In Progress" name={todo_status} onChange={handleChange}/> 
        <input type="radio" value="Done" name={todo_status} onChange={handleChange}/> 

        {/* CheckBox */}
        


    </form>
    </>

  )
}
