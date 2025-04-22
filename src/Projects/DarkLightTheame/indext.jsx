import { useState } from "react"

export const Theme = () =>{
    
    const [mybutton,setMyButton]=useState("Light");

    const handleOnClick = () =>{
        // setMyButton(!mybutton);
        setMyButton((prevValue) => prevValue==="Light" ? "Dark":"Light");
    }
    const theme_style ={
        backgroundColor : mybutton==="Light" ? "red" :"pink"
    }

    return(
        <div style={theme_style}>
            <h1>Light Dark Mode Website</h1>
            <h2>Hello ji</h2>
            {/* <button onClick={handleOnClick}>Switch to {(mybutton ? "Light" : "Dark")} Mode</button> */}
            <button onClick={handleOnClick}>Switch to {mybutton} Mode</button>
        </div>
    )
}