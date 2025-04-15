import { useRef } from "react";

export const UseRefReact = () =>{
    
    const userName= useRef(null);
    const password= useRef(null);

    //useRef generally used to access and modified the dom nodes without rerendering dom    
    //koi pan changes value ma thai to pn rerender no thai
    // if you sre ussing useref it will contain one object as byefault called current you can 
    // access properties of node ussing current.value cuttent.type etc
    
    const handleOnSubmit = (e) =>{
        
        e.preventDefault();
        
        // const userName= document.getElementById("username").value;
        
        // const password= document.getElementById("password").value;

        console.log(`name is ${userName.current.value} password is ${password.current.value}`)
    }

    return(
        <>

        <form onSubmit={handleOnSubmit}>
            <input type="text" name="username" id="username" ref={userName} />
            <input type="password" name="password" id="password" ref={password}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}