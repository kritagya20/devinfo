
import React from 'react';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full text-center text-xs font-bold p-1 fixed bottom-0 border-t-2 border-indigo-500 ${isDarkTheme ? 'bg-dark-tertiary text-dark-text1' : 'bg-light-tertiary text-light-text1'}`}>
      <p>Designed & Developed by Kritagya Singh Chouhan → © {currentYear}.</p>
    </footer>
  );
};

export default Footer;
