'use client';

import React from 'react';
import { ThemeProvider as GravityThemeProvider } from '@gravity-ui/uikit';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <GravityThemeProvider>
            {children}
        </GravityThemeProvider>
    );
};

export default ThemeProvider;
