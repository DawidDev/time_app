import React from 'react';

const TimersBar = ({handler}) => {
    return ( 
        <>
            <button onClick={handler.bind(this, 'stopwatch')}>Stopwatch</button>
            <button onClick={handler.bind(this, 'timer')}>Timer</button>
            <button onClick={handler.bind(this, 'alarm')}>Alarm</button>
            <button onClick={handler.bind(this, 'more_time')}>More time</button>
        </>
     );
}
 
export default TimersBar;