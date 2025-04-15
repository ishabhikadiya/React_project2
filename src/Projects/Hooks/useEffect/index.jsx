import { useState,useEffect } from "react"

export const UseEffectReact =()=>{

    // const [date,setDate]=useState("");
    const [data,setData]=useState("");
    let [count,setCount]=useState(0);
    const [c,setC]=useState(0);

     useEffect(()=>{

    //     setInterval(()=>{
    //         const updatedDate= new Date();
    //     setDate(updatedDate.toLocaleTimeString());

    //     },1000)
    
    document.title=count;

    console.log(`name is:${data}`)

     },[data,count])
     

    const handleInputData =(e)=>{
        setData(e.target.value);
    } 
    
    const inputHandles=()=>{        
        setCount((prev)=> prev=prev+1);
    }

    return(
        <>
        {/* <h1>Date is:{date}</h1> */}
        <h1>{data}</h1>
        <input type="text" className="border-2" value={data} onChange={handleInputData}/>
        <h1>{count}</h1>
        <button onClick={inputHandles}>Count</button>
        </>
    )
}