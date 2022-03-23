import { createContext } from 'react';

export const defaultObject = {
    theme: "dark"
}

export const AppContext = createContext(defaultObject);
