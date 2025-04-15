import { useState } from "react";

export const RegistrationForm =()=>{
    
    const [user,setUser]=useState({
        email:"",
        password:"",
    });

    const handleInputChange = (e)=>{

        const {name,value} = e.target;

        setUser((prev)=>({...prev,[name]:value})); 

        // switch(name){

        //     case "email":
        //         setEmail(value);
        //         break;

        //     case "password":
        //         setPassword(value);
        //         break;
        // }
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();  
        
        // const data={
        //     email:email,
        //     password:password,if the key and value is with the same name ,
        //     there is no neeed two write them into two times
        //     email,
        //     password,
        // }
        // console.log(data);

        console.log(user);  
    }

    return(
        <>
            <form className="border-1 p-4" onSubmit={handleFormSubmit}>{/*onSubmit event*/}
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" value={user.email}
                        className="form-control" placeholder="Enter email"
                        onChange={handleInputChange} />                   
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password}
                        className="form-control" placeholder="Password"
                        onChange={handleInputChange} />
                </div>
            
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>

        
    )
}