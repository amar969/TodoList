import React from 'react'

let initialState = {
    title: "", 
    description: "", 
    date: "", 
    todo_status: "", 
    todo_cate: ""
}

export const Form = () => {
  
    const [data, setData] = React.useState(initialState)
    
    const handleChange = (e) => {
        let {name, value, type} = e.target 
        value = type === "checked" ? name : value
        setData({...data, [name] : value})
    }

    

    let {title, description, date, todo_status, todo_cate} = data

    

    const getData = async() => {
        console.log(data)
        try {
            let res = await fetch("https://bath-bomb-testing-server.herokuapp.com/users",{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                "Content-Type": "application/json",
            }
        })
        let data1 = await res.json()
        console.log(data1)
            
        } catch (error) {
            console.log(error)    
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleChange(e)
        getData()
    }
    
    const handleClick = () => {
        console.log(data)
    }
    
    
return (
    <>
    <form onSubmit={handleSubmit}>

        <input type="text" value={title} name="title" onChange={handleChange} /> 
        <textarea type="text" value={description} name="description" onChange={handleChange} /> 
        <input type="date" value={date} name="date" onChange={handleChange} ></input> 

        {/* radio */}
        <input type="radio" value="Todo" name="todo_status" onChange={handleChange} /> Todo
        <input type="radio" value="In Progress" name="todo_status" onChange={handleChange}/> In Progress 
        <input type="radio" value="Done" name="todo_status" onChange={handleChange}/> Done

        {/* CheckBox */}
        <input type="checkbox" value="Offical" name="todo_cate" onChange={handleChange} /> Offical  
        <input type="checkbox" value="Personal" name="todo_cate" onChange={handleChange}/> Personal 
        <input type="checkbox" value="Other" name="todo_cate" onChange={handleChange}/> Other

        <button type="submit" onClick={handleClick} >Create a task</button>

    </form>
    </>

  )
}
