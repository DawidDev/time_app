import React, {useState} from 'react';
import styled from "styled-components";

const Container = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    max-width: 400px;
    //border: 1px solid red;
`

const Button = styled.button`
    padding: 5px 15px;
    outline: none;
    border: 0;
    border-radius: 10px;
    color: ${props => props.active ? "blue" : "none"};
    transition: .25s;

    &:hover {
        cursor: pointer;;
    }
`

const TimersBar = ({handler, activeButton}) => {
    const buttonsProperty = [
        {
            title: 'Stoper',
            name: 'stopwatch'
        },
        {
            title: 'Timer',
            name: 'timer'
        },
        {
            title: 'Alarm',
            name: 'alarm'
        },
        {
            title: 'Więcej..',
            name: 'more_time'
        },
    ]
    const Buttons = (
        buttonsProperty.map(item => (
            <Button active={activeButton === item.name ? true : false} onClick={handler.bind(this, item.name)}>{item.title}</Button>
        ))
    )

    return ( 
        <Container>
            {Buttons} 
        </Container>
     );
}
 
export default TimersBar;























/*

<Button active={activeButton === "stopwatch" ? true : false} onClick={handler.bind(this, 'stopwatch')}>Stopwatch</Button>
<Button onClick={handler.bind(this, 'timer')}>Timer</Button>
<Button onClick={handler.bind(this, 'alarm')}>Alarm</Button>
<Button onClick={handler.bind(this, 'more_time')}>More time</Button>

*/