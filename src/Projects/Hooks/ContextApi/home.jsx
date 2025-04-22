import{ useCustomHook } from "./indext"

export const Home = () =>{

    const {name,age} = useCustomHook();

    return(
        <>
         <h1>myname is {name} age is {age}</h1>
        </>
    )
}