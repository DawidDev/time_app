import React from 'react';

import styled from 'styled-components'

import clock from '../Images/clock.png'


const LogoDiv = styled.div`
    border: 1px solid red;
    overflow: hidden;

    img {
        width: 5rem;
        float: left;
    }
`

const LogoText = styled.div`
    float: left;
    margin-left: 10px;

    h1, h2 {
        margin: 0;
    }
`

const Logo = () => {
    return ( 
        <LogoDiv>
        <img src={clock} alt="clock" />
        <LogoText>
            <h2>Your</h2>
            <h1>TimerTab</h1>
        </LogoText>
        </LogoDiv>
     );
}
 
export default Logo;