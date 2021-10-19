import React, {useState, useEffect} from 'react';

const Alarm = () => {

    const [flag, setFlag] = useState(false)

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleTime = (e) => {
        const nameValue = e.target.name;
        const value = e.target.value;

        switch (nameValue) {
            case "hours":
                setHours(value)
                break;
            case "minutes":
                setMinutes(value)
                break;
            case "seconds":
                setSeconds(value)
                break;
            default:
                break;
        }
    }

    const calculate = () => {
        if(seconds > 0) {
            setSeconds(prevValue => prevValue -1)
        }
        else {
            if(minutes > 0){
                setMinutes(prevValue => prevValue -1)
                setSeconds(59)
            }
            else {
                if(hours > 0){
                    setHours(prevValue => prevValue -1)
                    setMinutes(59);
                    setSeconds(59)
                }
                else(
                    setFlag(false)
                )
            }
        }
        
    

    }
    
    const form = (
        <><br/>
            <input type='number' name="hours" value={hours} onChange={handleTime} />
            <input type='number' name="minutes" value={minutes} onChange={handleTime} />
            <input type='number' name="seconds" value={seconds} onChange={handleTime} />
        </>
    )

    const displayRemaningTime = (
        <>
            <p>Hours: {hours}</p>
            <p>Minutes: {minutes}</p>
            <p>Seconds: {seconds}</p>
        </>
    )

    useEffect(() => {
        const timer = setInterval(() => {
            if(flag) calculate()
          }, 1000);

        return () => clearInterval(timer)
    })

    return ( 
        <>  
            {flag ? displayRemaningTime : form}
            <button onClick={() => setFlag(prevValue => !prevValue)}>{flag ? "Stop" : "Start"}</button>
        </>
     );
}
 
export default Alarm;