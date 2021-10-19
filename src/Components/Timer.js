import React, {useEffect, useState} from 'react';


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
            <>
            <p>Dni: {timeDiff.days}</p>
            <p>Godziny: {timeDiff.hours}</p>
            <p>Minuty: {timeDiff.minutes}</p>
            <p>Sekundy: {timeDiff.seconds}</p>
        </>
    )
    
    // Obsługa formularza
    const handleForm = (e) => {
        const nameValue = e.target.name;
        const value = e.target.value;

        switch (nameValue) {
            case "year":
                setYear(value)
                break;
            case "month":
                setMonth(value)
                break;
            case "day":
                setDay(value)
                break;
            case "hour":
                setHour(value)
                break;
            case "minutes":
                setMinutes(value)
                break;
                
            default:
                break;
        }
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
        <><br/>
            <input type='number' name="year" min={timeNowForm.getFullYear()} max="2999" value={year} onChange={handleForm}/>
            <input type='number' name="month" min={year > timeNowForm.getFullYear() ? "1" : timeNowForm.getMonth()+1} max="12" value={month} onChange={handleForm}/>
            <input type='number' name="day" min={month > timeNowForm.getMonth()+1 ? "1" : timeNowForm.getDate()} max={daysInMonth(month, year)} value={day <= daysInMonth(month, year) ? day : daysInMonth(month, year) } onChange={handleForm}/>
            <input type='number' name="hour" min={day > timeNowForm.getDate() ? "0" : timeNowForm.getHours()} max="23" value={hour} onChange={handleForm}/> 
            <input type='number' name="minutes" min={ hour > timeNowForm.getHours() ? "0" : timeNowForm.getMinutes() } max="59" value={minutes} onChange={handleForm}/> 
        </>
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
        <>
            {flag ? null : form}
            {timeDiff.endTime ? "Podaj prawidłową datę" : (flag ? showTime(timeDiff) : null)}
            {!timeDiff.endTime ? <button onClick={handleTimer}>{flag === false ? "Rozpocznij odliczanie" : "Stop"}</button> : null}
        </>
     );
}
 
export default Timer;