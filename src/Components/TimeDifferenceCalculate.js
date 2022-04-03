import React from 'react';

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

export default timeDifference;