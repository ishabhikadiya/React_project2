// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react"
import { Fragment } from "react"
import Netflixseries, {Header, Footer}from "./components/NetflixSeries"
import { ToggleSwitch } from "./Projects/ToggleSwitch/ToggleSwitch"
import { Increament } from "./Projects/Hooks/Increment"
import { RegistrationForm } from "./Projects/Hooks/RegistrationForm"
import { UseEffectReact } from "./Projects/Hooks/useEffect"
import {PokemonCompo} from "./Projects/Hooks/useEffect/Project/index"
import { UseRefReact } from "./Projects/Hooks/useRef/useRef"
import { ForwordRefReact } from "./Projects/Hooks/useRef/forwordRef"
import { UseId } from "./Projects/Hooks/useId"



// "export const App1 = () =>" for named export
const App1 = () => {

  return (
    
   // [<Netflixseries key="0"/>,<Netflixseries key="4"/>] // array of component

   //<Rect.Fragment></Rect.Fragment>
   //<></> you can also use this without import react and fragment 

    <Fragment> 
        <UseId/>
      {/* <ForwordRefReact/> */}
      {/* <UseRefReact/> */}
      {/* <Header/> */}
       {/* <Netflixseries/>  */}
       {/* calling componenet in html code */}
       {/* <ToggleSwitch/> */}
      {/* <Footer/> */}
      {/* <Increament/> */}
      {/* <RegistrationForm/> */}
      {/* <UseEffectReact/> */}
      {/* <PokemonCompo/> */}

    </Fragment>   

  )
}


export default App1
 // default export
