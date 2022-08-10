import React from 'react'

export const CreateTodo = () => {

    // const getData = async() => {
    //     const payload = {
    //         title: "Test", 
    //         desc: "Test", 
    //         date: "28/jul/2022", 
    //         subtask: [
    //             "Hello World"
    //         ], 
    //         status: "Todo", 
    //         tag: "Offical"
    //     }

    //     let res = await fetch("https://bath-bomb-testing-server.herokuapp.com/users",{
    //         method: "POST",
    //         body: JSON.stringify(payload),
    //         headers: {
    //         "Content-Type": "application/json",
    //     }
    // })
    //     let data = await res.json()
    //     console.log(data)
    // }

    React.useEffect(() => {
        //getData()
    }, [])

  return (
    <>
    CreateTodo
    </>
  )
}