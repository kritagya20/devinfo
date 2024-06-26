import React from 'react';
import { useTheme, ToggleButton } from './ThemeContext';
import Avatar from './Avatar';
import { Git } from '../assets';


const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  return (
    <header className={`flex justify-between items-center py-1 px-4 border-b-2 border-indigo-500  ${isDarkTheme ? 'bg-dark-tertiary text-dark-text1' : 'bg-light-tertiary text-light-text1'}`}>
      <div className="w-14 h-14">
        {/* Avatar component placeholder */}
        <Avatar />
      </div>
      <div>
        <h1 className="text-4xl font-bold">DevInfo</h1>
      </div>
      <button onClick={toggleTheme} className="p-2">
        <ToggleButton />
      </button>
    </header>
  );
};

export default Header;
