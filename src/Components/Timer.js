import React, {useEffect, useState} from 'react';

import styled from "styled-components";

import Button from '@mui/material/Button';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .btn_start, .alert_input_date {
        margin: 20px auto;
        font-size: 1.5rem;
        border-radius: 25px;
        outline: none;
        border: none;
        padding: 10px 20px;
    }

    .alert_input_date {
        font-size: 20px;
    }
`

const FormBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    

    .timer_date {
        margin: 0 auto;
        width: 250px;
        height: 50px;
        font-size: 25px;
        text-align: center;
    }
    

    .timer_hour {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .handle_Time_Box_Timer{
        display: flex;
        flex-direction: column;
        margin: 0 10px;
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
        text-align: center;
        margin: 0 auto;
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
const DisplayTimeBox = styled.div`
    display: flex;
    flex-direction: column;

    span {
        width: 200px;
        margin: 20px auto;
        font-size: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;

        p {
            padding-left: 10px;
            font-size: 35px;
            margin: 0;
        }
    }
`
const Timer = () => {

    // Odczyt ciasteczka
    const restoreDateCookie = document.cookie.split('/');
    const [isCookies, setIsCookies] = useState(restoreDateCookie[restoreDateCookie.length-1] === "true" ? true : false)
    const q = restoreDateCookie.length;

    // Zmienne główne do obsługi aplikacji
    const [flag, setFlag] = useState(false);
    
    const [timeNowForm, setTimeNowForm] = useState(new Date())
    
    const [year, setYear] = useState(isCookies ? restoreDateCookie[q-7] : timeNowForm.getFullYear());
    const [month, setMonth] = useState(isCookies ? restoreDateCookie[q-6] : timeNowForm.getMonth() + 1);
    const [day, setDay] = useState(isCookies ? restoreDateCookie[q-5] : timeNowForm.getDate());
    const [hour, setHour] = useState(isCookies ? restoreDateCookie[q-4] : timeNowForm.getHours());
    const [minutes, setMinutes] = useState(isCookies ? restoreDateCookie[q-3] : timeNowForm.getMinutes());
    const [seconds, setSeconds] = useState(isCookies ? restoreDateCookie[q-2] : 0);


    // Obliczanie ilości dni w miesiacu, czyli ostatniego dnia miesiąca
    const daysInMonth =  (month, year) => {
        return new Date(year, month, 0).getDate();
    }

    const timeDifference = (year, month, day, hour, minutes, seconds ) => {
        const timeNow = new Date()

        const timeTimer = new Date(year, month-1, day, hour, minutes, seconds)

        const msInADay = 24 * 60 * 60 * 1000; //1 dzień w milisekundach

        // Obliczanie różnicy czasu w ms
        const timeDifference = timeTimer.getTime() - timeNow.getTime();
    
        const eDaysToDate = timeDifference / msInADay;
        const daysToDate = Math.floor(eDaysToDate);
        
        let daysToDateFix = (daysToDate < 1)? 1 : daysToDate;

        const eHoursToDate = (eDaysToDate % daysToDateFix)*24;
        const hoursToDate = Math.floor(eHoursToDate);

        const eMinutesToDate = (eHoursToDate - hoursToDate)*60;
        const minutesToDate = Math.floor(eMinutesToDate);

        const eSecondsToDate = Math.floor((eMinutesToDate - minutesToDate)*60);
        const secondsToDate = Math.floor(eSecondsToDate);

        const endTime = timeDifference < 0; // Czy koniec odliczania

        return {
            days : daysToDate,
            hours : hoursToDate,
            minutes : minutesToDate,
            seconds : secondsToDate,
            endTime
        }
    }

    // Wyświetlanie odliczania
    const showTime = (timeDiff) => (
        <DisplayTimeBox>
            <span>Dni: <p>{timeDiff.days}</p></span>
            <span>Godziny: <p>{timeDiff.hours}</p></span>
            <span>Minuty: <p>{timeDiff.minutes}</p></span>
            <span>Sekundy: <p>{timeDiff.seconds}</p></span>
        </DisplayTimeBox>
    )
    
    // Obsługa formularza
    const handleForm = (e) => {
        const nameValue = e.target.name;
        const value = e.target.value;

        switch (nameValue) {
            case "hour":
                setHour(value)
                break;
            case "minutes":
                setMinutes(value)
                break;
            
            // testowana część kodu
            case "calendar-date":
                const tempYear = value.substring(0,4);
                const tempMonh = value.substring(5,7);
                const tempDay = value.substring(8,10);
                setYear(tempYear)
                setMonth(tempMonh)
                setDay(tempDay)
                break;
            case "hours":
                
                value === '-' ? 
                (hour > 0 ? setHour(prevValue => prevValue - 1) : setHour(0)) 
                : (hour < 23 ? setHour(prevValue => (prevValue*1) + 1) : setHour(0)) 
                break;
            case "minutes_2":
                value === '-' ? 
                (minutes > 0 ? setMinutes(prevValue => prevValue - 1) : setMinutes(0)) 
                : (minutes < 59 ? setMinutes(prevValue => (prevValue*1) + 1) : setMinutes(0)) 
                break;
                
            default:
                break;
        }

        //console.log(value)

    }

    // Funkcja obsługująca odliczanie. Decyduje czy podano poprawną datę czy nie.
    const handleTimer = () => {
        if(!timeDiff.endTime) setFlag(prevValue => !prevValue)
        
        // Usuwanie ciasteczka w momencie tylko gdy użytkownik zatrzyma odliczanie
        if(flag) {
            document.cookie = "timerCookie=; SameSite=None; secure; max-age=-1;"
        }
    }


    const form = (
        <FormBox>
            <input className='timer_date' type="date" name="calendar-date" min="2022-03-30"  onChange={handleForm}/>
            <br/>
            {/*<input type='number' name="year" min={timeNowForm.getFullYear()} max="2999" value={year} onChange={handleForm}/>
            <input type='number' name="month" min={year > timeNowForm.getFullYear() ? "1" : timeNowForm.getMonth()+1} max="12" value={month} onChange={handleForm}/>
            <input type='number' name="day" min={month > timeNowForm.getMonth()+1 ? "1" : timeNowForm.getDate()} max={daysInMonth(month, year)} value={day <= daysInMonth(month, year) ? day : daysInMonth(month, year) } onChange={handleForm}/>
            */}
            <div className='timer_hour'>
                <div className='handle_Time_Box_Timer'>
                    <Button  name="hours" value="+" onClick={handleForm.bind(this)}>+</Button>
                    <input readOnly="readOnly" type='number' name="hours" min={day > timeNowForm.getDate() ? "0" : timeNowForm.getHours()} max="23" value={hour} onChange={handleForm}/> 
                    <Button  name="hours" value="-" onClick={handleForm.bind(this)}>-</Button>
                </div>
                <div className='handle_Time_Box_Timer'>
                    <Button  name="minutes_2" value="+" onClick={handleForm.bind(this)}>+</Button>
                    <input readOnly="readOnly" type='number' name="minutes_2" min={ hour > timeNowForm.getHours() ? "0" : timeNowForm.getMinutes() } max="59" value={minutes} onChange={handleForm}/> 
                    <Button  name="minutes_2" value="-" onClick={handleForm.bind(this)}>-</Button>
                </div>
            </div>
        </FormBox>
    )

    let timeDiff = timeDifference(year, month, day, hour, minutes, seconds);


    // Tworzenie ciasteczka gdy: nie istnieje && gdy rozpoczniemy odliczanie    
    if(isCookies === false && flag === true){
        document.cookie = `timerCookie = /${year}/${month}/${day}/${hour}/${minutes}/${seconds}/true; SameSite=None; secure`
    }

    // Sprawdzenie co zawiera ciasteczko aktualnie
    //console.log(restoreDateCookie)

    useEffect(() => {
        const timer = setInterval(() => {
            if(flag) setTimeNowForm(new Date())
          }, 1000);

        return () => clearInterval(timer)
    })

    return ( 
        <Container>
            {flag ? null : form}
            {timeDiff.endTime ? <span className='alert_input_date'>Podaj prawidłową datę</span> : (flag ? showTime(timeDiff) : null)}
            {!timeDiff.endTime ? <button className='btn_start' onClick={handleTimer}>{flag === false ? "Rozpocznij odliczanie" : "Stop"}</button> : null}
        </Container>
     );
}
 
export default Timer;