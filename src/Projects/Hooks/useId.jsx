import { useId } from "react";
export const UseId = () =>{

    // const username=useId();
    // const password=useId();

    const id = useId();

//generally used to create unique id for each elements 
// u can not used in map method in key attribute
//when you working in multiple forms which have same field and id name then 
// it will conflict so that's why you shoud use useId()

    return(
        <>
        {/* <form action="">
            <label htmlFor="username"></label>
            <input type="text" id="username"/>

            <label htmlFor="password"></label>
            <input type="password" id="password" />
        </form> */}
        <form action="">
            <label htmlFor={id + "username"}></label>
            <input type="text" id={id+"username"}/>

            <label htmlFor={id+"password"}></label>
            <input type="password" id={id+"password"} />
        </form>
        </>
    )
}