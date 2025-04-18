import { createContext } from "react"
 
export const CreateContext = createContext();

export const CreateContextProvider = ({children}) => {

    const name="isha";
    const age=24;

        return(
            <>
                <CreateContext.Provider value={{name,age}}>
                     {children}
                 </CreateContext.Provider>
            </>
        )           

}
