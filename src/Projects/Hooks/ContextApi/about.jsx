import { useContext,use } from "react"
import { CreateContext } from "./indext"

export const About = () =>{

    // const{name,age}=useContext(CreateContext);
    const{name,age} = use(CreateContext);

    return(
        <>
            <h1>myname is {name} age is {age}</h1>
        </>
    )
}