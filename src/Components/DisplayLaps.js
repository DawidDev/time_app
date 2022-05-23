import React, {useState} from 'react';


const DisplayLaps = ({seconds, minutes, hours}) => {
    const [laps, setLaps] = useState([]) 

    const handleSaveTime = () => {  
        const item = {
            id: laps.length,
            /*timeMiliSec: milicesonds <= 9 ? `0${milicesonds}` : milicesonds,*/
            timeSec: seconds <= 9 ? `0${seconds}` : seconds,
            timeMin: minutes <= 9 ? `0${minutes}` : minutes,
            timeHour: hours <= 9 ? `0${hours}` : hours,
        } 
        //setLaps([...laps, item].reverse()) // Odwracanie tablicy aby ostatni czas wyświetlany był jako pierwszy
        setLaps([item, ...laps])
    }

    const handleResetSavedTime = () => {
        setLaps([])
    }

    const displayLaps = (
        laps.map(item => (
            <p key={item.id}>
                {item.id+1}{" czas: "}
                {item.timeHour > 0 ? item.timeHour + `:`: null}
                {item.timeMin > 0 ? item.timeMin + `:` : null }
                {item.timeSec}
            </p>
        ))
    )

    const btnResetSavedLapsDisplay = laps.length > 0 ? <button onClick={handleResetSavedTime.bind(this)}>Reset laps</button> : null

    return(
        <>
        <button onClick={handleSaveTime.bind(this)}>Save time</button>
        {displayLaps}
        {btnResetSavedLapsDisplay}
        </>
    )
}

export default DisplayLaps;