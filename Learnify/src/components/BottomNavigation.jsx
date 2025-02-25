import React from 'react';
// import { Home, LayoutGrid, User } from 'lucide-react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '../assets/Icons/noun-home-7548327.svg'
import { useState } from 'react';

export default function BottomNavBar() {
  const [value, setValue] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="w-full"
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon size={20} />} />
        <BottomNavigationAction label="Modules" icon={<HomeIcon size={20} />} />
        <BottomNavigationAction label="Profile" icon={<HomeIcon size={20} />} />
      </BottomNavigation>
    </div>
  );
}
