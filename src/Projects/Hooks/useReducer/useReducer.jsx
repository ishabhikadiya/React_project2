import { useReducer } from "react"

export const UseReducer = () =>{

    
    const reducer = (state,action)=>{
        
            // if(action.type==="increament")
            // {
            //     return state+1;
            // }
            // if(action.type==="decreament"){
            //     return state-1;
            // }
            switch(action.type)
            {
                case "increament":
                    return state+1;
                
                case "decreament":
                    return state-1;

                case "clear":
                    return 0;    

            }
            
        }
        
        const [count,dispatch] = useReducer(reducer,0);
    return(
        <>
        <h1>{count}</h1>
        <input type="button" value="increament" onClick={() => dispatch ( {type:"increament"}) } />
        <input type="button" value="decrement" onClick={() => dispatch ( {type:"decreament"}) } />
        <input type="button" value="clear" onClick={() => dispatch ( {type:"clear"}) } />
        </>
    )
}
