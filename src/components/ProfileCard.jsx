export const ProfileCard=(props)=>{
    return(
        <>
        <h1>Name:{props.name}</h1>
        <h2>Age:{props.age}</h2>
        <p>greting:{props.greeting}</p>
        <div>{props.children}</div>
        </>
    )
}

export const Profile =()=>{
    return(
        <ProfileCard name="isha" age={12} 
         greeting= 
         {
             <div>
                 <p>
                     hello its awoderfulday!!
                 </p>
             </div>
         }>
            {/* children values */}
            <h1>hhhhhhhh</h1>
            <h2>gagaga</h2>
        </ProfileCard>

    )
}