import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App1 from './App.jsx'
// for default import 

// import {App1} from './App.jsx' for named import

// import {Profile} from "./components/ProfileCard.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1 />
    {/* <Profile/> */}
  </StrictMode>,
)
