import React from "react";
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};
const ThemeContext = React.createContext(themes.dark);
ThemeContext.displayName = "ThemeContextName";
export default ThemeContext;