// src/components/HomePage.js
import React from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import { useTheme } from '../../components/ThemeContext';

const HomePage = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';


  return (
    
      <div className= {`min-w-screen min-h-screen  ${isDarkTheme ? 'bg-dark-secondary text-dark-text1' : 'bg-light-secondary text-light-text1'}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
