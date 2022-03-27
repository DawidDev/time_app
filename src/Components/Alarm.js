import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import CircularProgress from '@mui/material/CircularProgress';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;

    button {
        width: 150px;
        margin: 20px auto;
        font-size: 1.5rem;
        border-radius: 25px;
        outline: none;
        border: none;
        padding: 10px 20px;
    }
`

const ProgressCircleBox = styled.div`
    margin: 0 auto;
    position: relative;
    height: 400px;

    p {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
    }
`

const RemaningTimeBox = styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;

    span {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-50%, -50%);
        margin: 0;
    }
`

const Form = styled.div`
   width: 100%;
   height: 400px;
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   padding: 50px;


   input {
       margin: 20px auto;
       height: 2.5rem;
       width: 20rem;
   }
`

const Alarm = () => {

    const [flag, setFlag] = useState(false)

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [progress, setProgress] = useState(0);

    const [secondsStart, setSecondsStart] = useState(0)
     //console.log(secondsStart)
                
    const handleTime = (e) => {
        // Obsługa ustawiania wartości w formularzu
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

        // Obsługa CircuralProgress, obliczanie pozostałej ilości sekund i ustawianie progresu
        const remainingSeconds = secondsStart - ((hours*60*60) + (minutes*60) + seconds);
        const calculateProgress = Math.floor((remainingSeconds * 100)  / secondsStart);
        console.log(calculateProgress + " %");
        setProgress(calculateProgress);
       

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

    const startFunction = () => {
        setSecondsStart(((hours*60*60) + (minutes*60) + seconds))
        setFlag(prevValue => !prevValue)
    }
    
    const form = (
        <Form>
            <input type='number' min="0" name="hours" value={hours} onChange={handleTime} />
            <input type='number' min="0" name="minutes" value={minutes} onChange={handleTime} />
            <input type='number' min="0" name="seconds" value={seconds} onChange={handleTime} />
        </Form>
    )

    const displayRemaningTime = (
        <RemaningTimeBox>
            <span>
                {hours > 0 ? (`${hours}:`) : "" /* Wyświetlanie dopiero gdy jest większe od 0 */} 
                {minutes > 0 || hours > 0 ? (minutes <= 9 && hours >0 ? `0${minutes}:` : `${minutes}:`) : ""}
                {seconds <= 9 ? `0${seconds}` : seconds }
            </span>
        </RemaningTimeBox>
    )

    const progressBox = (
            <ProgressCircleBox>
                <CircularProgress 
                sx={{
                    color: 'black',
                    margin: '0 auto'
                }}
                size={400}
                thickness={0.6}
                variant="determinate" value={progress} />
                <CircularProgress 
                sx={{
                    color: '#dedede',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '-1'
                }}
                size={400}
                thickness={0.5}
                variant="determinate" value={100} />
            {displayRemaningTime}
            <p>{progress}%</p>
            </ProgressCircleBox>
    )

    useEffect(() => {
        const timer = setInterval(() => {
            if(flag) calculate()
          }, 1000);

        return () => clearInterval(timer)
    })

    return ( 
        <Container>  
            {flag ? progressBox : form}
            <button onClick={startFunction }>{flag ? "Stop" : "Start"}</button>
        </Container>
     );
}
 
export default Alarm;