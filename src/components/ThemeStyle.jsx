import React, { useState } from 'react';

function ThemeToggle() {
  let theme, setTheme = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  };

  const themeStyles = theme === 'light' ? {
    backgroundColor: 'white',
    color: 'black'
  } : {
    backgroundColor: 'black',
    color: 'white'
  };

  return (
    <div style={themeStyles}>
      <h1>Toggle Theme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}