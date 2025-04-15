import { useState } from "react"

export const Increament = () =>{

    // let a=211;
    // let b=43;
    // let c=62;

    // if(a>b)
    // {
    //     if(a>c)
    //     {
    //         console.log("a is big")
    //     }
    //     else{
    //         console.log("c is big")
    //     }
    // }
    // else if(b>c)
    // {
    //     console.log("b is big");
    // }
    // else
    // {
    //     console.log("c is big")
    // }
    

    
    const [count,setCount]=useState(0);

    const [value,setValue]=useState(1);

    const btn_style = {
        padding: "0.6rem 1.4rem",
        border: "none",
        fontSize: "1.0rem",
        backgroundColor: "#7dcea0",
        fontWeight: "bold",
        cursor: "pointer",
        color:"white",
        marginRight:"1.0rem"
        
     }
  
const handleChange =(value)=>{
setValue(value);
}

const handleClickinc =()=>{
 setCount(count + value);
}
const handleClickdes =()=>{
setCount(count - value);
}
const handleClickclear =()=>{
setCount(0);
}
    return(
        <>
        <p>{count}</p>
        <input type="number" placeholder="Enter The Value" value={value}  max={100} onChange={(e) => handleChange(Number(e.target.value))}/><br/>

        <button style={btn_style} onClick={handleClickinc} disabled={ count >= 100} >Increment</button>

        <button style={btn_style} onClick={handleClickdes} disabled={ count <= 0}>Decrement</button>

        <button style={btn_style} onClick={handleClickclear}>Claear</button>
        </>
    )
}