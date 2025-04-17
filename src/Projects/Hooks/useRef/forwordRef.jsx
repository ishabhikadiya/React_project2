import { useId, useRef } from "react";

export const ForwordRefReact = () =>{
    
    const userName= useRef(null);
    const password= useRef(null);
    
    const handleOnSubmit = (e) =>{
        
        e.preventDefault();
        console.log(`name is ${userName.current.value} password is ${password.current.value}`)
    }

    return(
        <>
        <form onSubmit={handleOnSubmit}>
           <BeforReact19 label="username" ref="userName"/>
           <BeforReact19 label="password" ref="password"/>
           <button type="submit">submit</button>
        </form>
        </>
    )
}

//passes the data without props and rerender the page

const BeforReact19 = ({label,ref}) => {
// const BeforReact19 = (props) => {
    const id=useId();
    return(
        <>
         <label htmlFor={id}>{label}</label>
         {/* <input type="text" ref={props.ref}/> */}
         <input type="text" ref={ref}/>
        </>
    )
}