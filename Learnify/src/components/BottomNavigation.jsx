import ModulesIcon from '../assets/Icons/noun-dashboard-7435348.svg'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '../assets/Icons/noun-home-7548327.svg'
import SettingsIcon from '../assets/Icons/noun-settings-816143.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BottomNavBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg z-50 w-full">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            padding: '6px 0',
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: '0.7rem',
          }
        }}
      >
        <BottomNavigationAction 
          label="Modules" 
          icon={<img src={ModulesIcon} alt="Modules" width={20} height={20} />} 
          onClick={()=>navigate("/modules")}
        />
        <BottomNavigationAction 
          label="Home" 
          icon={<img src={HomeIcon} alt="Home" width={20} height={20} />} 
          onClick={()=>navigate("/home")}
        />
        <BottomNavigationAction 
          label="Settings" 
          icon={<img src={SettingsIcon} alt="Settings" width={20} height={20} />} 
          onClick={()=>navigate("/settings")}
        />
      </BottomNavigation>
    </div>
  );
}