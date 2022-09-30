import React, { createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext(false);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('1');
    const value = useMemo(() => ({ theme, setTheme }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;