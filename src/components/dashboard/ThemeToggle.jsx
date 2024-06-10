import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-16 h-8 rounded-full relative focus:outline-none ${isDarkMode ? 'bg-primary-100' : 'bg-primary-50'}`}
    >
      <div
        className={`w-6 h-6  rounded-full absolute top-1 transition-transform duration-300 ${isDarkMode ? 'transform translate-x-full bg-primary-50' : 'left-1 bg-primary-100'}`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
