import React, {useContext, useEffect, useState} from 'react';

// Import kontektstu
import { AppContext } from "../AppContext";

const Stopwatch = () => {

    const [flag, setFlag] = useState(false)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0)
    const [laps, setLaps] = useState([]) 

    // Obsługa motywu z kontekstu
    const {theme} = useContext(AppContext);

    useEffect(() => {
        const stopwatch = setTimeout(() => {
            if(flag) setSeconds(prevValue => prevValue +1)
          }, 1000);

        return () => clearTimeout(stopwatch)
    })

    const resetStopwatch = () => {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setLaps([])
        setFlag(false);
    }

    const handleSaveTime = () => {  
        const item = {
            id: laps.length,
            timeSec: seconds <= 9 ? `0${seconds}` : seconds,
            timeMin: minutes <= 9 ? `0${minutes}` : minutes,
            timeHour: hours <= 9 ? `0${hours}` : hours,
        } 
        setLaps([...laps, item])
    }

    if(seconds > 59) {
        setSeconds(0);
        setMinutes(prevValue => prevValue + 1);
    }

    if(minutes > 59){
        setMinutes(0);
        setHours(prevValue => prevValue +1)
    }

    const displayStopwatch = (
        <span>
            {hours <= 9 ? `0${hours}` : hours}:
            {minutes <= 9 ? `0${minutes}` : minutes}:
            {seconds <= 9 ? `0${seconds}` : seconds }:
        </span>
    )
    
    const displayLaps = (
        laps.map(item => (
            <p key={item.id}>
                {item.timeHour}:{item.timeMin}:{item.timeSec}
            </p>
        ))
    )
    

    return ( 
        <div>
            {displayStopwatch}
            <button onClick={() => { setFlag(prevValue => !prevValue)}}>{flag ? 'Stop' : 'Start'}</button>
            <button onClick={resetStopwatch.bind(this)}>Reset</button>
            <button onClick={handleSaveTime.bind(this)}>Save time</button>
            {displayLaps}
        </div>
     );
}
 
export default Stopwatch;