import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;

    .btn_start {
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
    height: 350px;
    width: 350px;

    p {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
    }
`

const RemaningTimeBox = styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;

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
   //height: 400px;
   padding: 50px 0;
   display: flex;
   justify-content: center;

   .handle_Time_Box {
       width: 80px;
       display: flex;
       flex-wrap: wrap-reverse;
       justify-content: center;
       align-items: center;
   }

   input {
       margin: 10px auto;
       height: 70px;
       width: 70px;
       text-align: center;
       font-size: 30px;
   }

   button {
        font-size: 40px;
        width: 70px;
        height: 50px;
   }

   // Ukrywanie strzałek pola input
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
    
`
 
const Alarm = () => {
    const [flag, setFlag] = useState(false)

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [progress, setProgress] = useState(0);

    const [secondsStart, setSecondsStart] = useState(0)
                
    const handleTime = (e) => {
        // Obsługa ustawiania wartości w formularzu
        const nameValue = e.target.name;
        const value = e.target.value;

        switch (nameValue) {
            case "hours":
                value < 101 ? setHours(value) : setHours(60)
                console.log("działam")
                break;
            case "minutes":
                value < 60 ? setMinutes(value) : setMinutes(59)
                break;
            case "seconds":
                value < 60 ? setSeconds(value) : setSeconds(59)
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

    const handleTimeButtons = (nameParametr, typeOperation) => {
        switch (nameParametr) {
            case 'hours':
                if(typeOperation === '-' && hours > 0) setHours(prevValue => (prevValue*1) -1)
                else if(typeOperation === '+' && hours < 100) setHours(prevValue => (prevValue*1) +1)
                break;
            case 'minutes':
                if(typeOperation === '-' && minutes > 0) setMinutes(prevValue => (prevValue*1) -1)
                else if(typeOperation === '+' && minutes < 59) setMinutes(prevValue => (prevValue*1) +1)
                break;
            case 'seconds':
                if(typeOperation === '-' && seconds > 0) setSeconds(prevValue => (prevValue*1) -1)
                else if(typeOperation === '+' && seconds < 59) setSeconds(prevValue => (prevValue*1) +1)
                break;
            default:
                break;
        }
    }
    
    const form = (
        <Form>
            <div className='handle_Time_Box'>
                <Button onClick={handleTimeButtons.bind(this, 'hours', '-')}>-</Button>
                    <input type='number' min="0" max="60" name="hours" value={hours} onChange={handleTime} />
                <Button onClick={handleTimeButtons.bind(this, 'hours', '+')}>+</Button>
            </div>
            <div className='handle_Time_Box'>
                <Button onClick={handleTimeButtons.bind(this, 'minutes', '-')}>-</Button>
                    <input type='number' min="0" name="minutes" value={minutes} onChange={handleTime} />
                <Button onClick={handleTimeButtons.bind(this, 'minutes', '+')}>+</Button>
            </div>
            <div className='handle_Time_Box'>
                <Button onClick={handleTimeButtons.bind(this, 'seconds', '-')}>-</Button>
                    <input type='number' min="0" name="seconds" value={seconds} onChange={handleTime} />
                <Button onClick={handleTimeButtons.bind(this, 'seconds', '+')}>+</Button>
            </div>
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
                    margin: '0 auto',
                }}
                size={350}
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
                size={350}
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
            <button className='btn_start' onClick={startFunction }>{flag ? "Stop" : "Start"}</button>
        </Container>
     );
}
 
export default Alarm;