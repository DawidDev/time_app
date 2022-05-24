import { createContext } from 'react';

export const defaultObject = {
    theme: "light",
    setTheme: () => {}
}

export const AppContext = createContext(defaultObject);
