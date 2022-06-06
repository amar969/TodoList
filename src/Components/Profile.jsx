import React from 'react'
import avatar from "../amar.jpg";

export const Profile = () => {

    let age = 18
    const [count, setCount] = React.useState(age)

    const [btnText, setBtnText] = React.useState("Show More Details")

    const [mystyles, setStyles] = React.useState({
        display: "flex",
        flexDirection: "column"
    })

    const handleAgeInc = (value) => {
        setCount(count + value)
    }

    const handleChange = () => {
        if(mystyles.display == "flex"){
            setStyles({
                display:"none"
            })
            setBtnText("Show More Details")
        }
        else{
            setStyles({
                display: "flex",
                flexDirection: "column"

            })
            setBtnText("Hide More Details")
        }
    }
    


    return(
        <>
    
        <div className='card'>
            <img src={avatar} alt="profile pic"/>
            <h1> Name : Amarjeet Maurya</h1>
            <h1> Age : {count}</h1>
            <button onClick={() => handleAgeInc(1)}>Increase Age</button>
            <button onClick={() => handleAgeInc(-1)}>Decrease Age </button>
            <p></p>
            <button onClick={() => handleChange()}>{btnText}</button>
            <div style={mystyles} className='details'>
                 <h1>Location : Mumbai</h1>
                 <h1>Organization : Richpanel</h1>
             </div>
        </div>

        </>
    )
}