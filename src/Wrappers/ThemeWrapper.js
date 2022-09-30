import React from 'react';
import useTheme from '../hooks/useTheme';

const ThemeWrapper = ({ children }) => {
    const { theme } = useTheme();
    let themeSuffix = '';

    if (theme === '2') {
        themeSuffix = ' gray';
    } else if (theme === '3') {
        themeSuffix = ' violet'
    }
    return (
        <div className={`themeWrapper${themeSuffix}`}>
            {children}
        </div>
    );
};

export default ThemeWrapper;