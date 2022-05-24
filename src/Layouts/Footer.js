import React, { useContext } from 'react';

import styled from "styled-components";

// Import kontektstu
import { AppContext } from "../AppContext";

// Import obiektu motywu
import ThemeObject from "../config/configTheme";

const Container = styled.div`
    color:  ${(props) => props.theme === 'light' ? props.themeObject.light.colorTxtFooter : props.themeObject.dark.colorTxtFooter };
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`

const Footer = () => {

    const { theme } = useContext(AppContext);

    return ( 
        <Container theme={theme} themeObject={ThemeObject} >
            Created by Dawid Rożak
        </Container>
     );
}
 
export default Footer;

/*
    Wersja stopki z lewej strony, odwróconej

    transform: rotate(-90deg);
    width: auto;
    left: -18%;
    top: 80%;
    font-size: 14px;
    
    */
