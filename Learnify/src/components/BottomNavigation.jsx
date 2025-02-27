import React from 'react';
import ModulesIcon from '../assets/Icons/noun-dashboard-7435348.svg'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '../assets/Icons/noun-home-7548327.svg'
import SettingsIcon from '../assets/Icons/noun-settings-816143.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BottomNavBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx ={{ width: "100%", position: "absolute", bottom:0}}
      >
        <BottomNavigationAction label="Modules" icon={<img src={ModulesIcon} alt="Modules" width={24} height={24} />} onClick={()=>navigate("/modules")}/>
        <BottomNavigationAction label="Home" icon={<img src={HomeIcon} alt="Home" width={24} height={24} />} onClick={()=>navigate("/home")}/>
        <BottomNavigationAction label="Settings" icon = {<img src={SettingsIcon} alt="Settings" width={24} height={24} />} onClick={()=>navigate("/settings")}/>
      </BottomNavigation>
    </div>
  );
}
