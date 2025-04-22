import { useState } from "react";
import ts from "./ToggleSwitch.module.css";
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
      <div className={ts["toggle-switch"]} style={toggleBGColor} onClick={handleToggleSwitch}>
        {/* Because of hyphen  */}
        <div className={`${ts.switch} ${isOn ? ts.on : ts.off }`}>

          <span className={ts["switch-state"]}>{isOn ? "on" : "off"}</span>

        </div>
      </div>
    </>
  );
};