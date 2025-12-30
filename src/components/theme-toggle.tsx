import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
        document.body.classList.toggle('dark-theme', !isDarkTheme);
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;