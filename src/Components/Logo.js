import React from 'react';

import styled from 'styled-components'

import clock from '../Images/clock.png'


const LogoDiv = styled.div`
    //border: 3px solid red;
    overflow: hidden;
    width: 100%;
    max-width: 600px;
    margin: 20px auto;

    img {
        width: 5rem;
        float: left;
    }
`

const LogoText = styled.div`
    float: left;
    margin-left: 20px;

    h1, h2 {
        margin: 0;
        text-transform: uppercase;
    }

    h1 {
        font-size: 40px;
    } 
`

const Logo = () => {
    return ( 
        <LogoDiv>
        <img src={clock} alt="clock" />
        <LogoText>
            <h2>Your</h2>
            <h1>Time</h1>
        </LogoText>
        </LogoDiv>
     );
}
 
export default Logo;