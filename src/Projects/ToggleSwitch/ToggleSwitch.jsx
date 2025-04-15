import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";


export const ToggleSwitch = () => {

  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

//   const checkIsOn = isOn ? "on" : "off";

 const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };


  return (
    <>    
    <IoIosSwitch></IoIosSwitch>
      <div className="toggle-switch" style={toggleBGColor} onClick={handleToggleSwitch}>
        <div className={`switch ${isOn ? "on" : "off"}`}>

          <span className="switch-state">{isOn ? "on" : "off"}</span>

        </div>
      </div>
    </>
  );
};