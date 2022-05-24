import React, { useState, useEffect, useContext } from "react";

import styled from "styled-components";

import timeDifference from "./TimeDifferenceCalculate";

// Importujemy nasz appContext
import { AppContext } from "../AppContext";

// Import obiektu motywu
import ThemeObject from "../config/configTheme";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ResultTimeBox = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom:  ${(props) => (props.theme === "light" ? props.themeObject.light.colorBorderLineInMoreComponent : props.themeObject.dark.colorBorderLineInMoreComponent)};

  .box_time {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }

  h5 {
    margin: 20px 0 0 0;
    font-size: 15px;
    align-self: center;
  }

  p {
    float: left;
    font-size: 20px;
    margin: 0;
    padding-left: 10px;
  }
`;

const MoreTime = () => {
  const { theme } = useContext(AppContext);

  const [timeNowForm, setTimeNowForm] = useState(new Date());
  const [year, setYear] = useState(timeNowForm.getFullYear());
  const [month, setMonth] = useState(timeNowForm.getMonth() + 1);
  const [day, setDay] = useState(timeNowForm.getDate());

  // Do użycia w przyszłości..
  const [hour, setHour] = useState(timeNowForm.getHours());
  const [minutes, setMinutes] = useState(timeNowForm.getMinutes());
  const [seconds, setSeconds] = useState(0);

  // Obliczanie ilości dni w miesiacu, czyli ostatniego dnia miesiąca
  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const showTime = (timeDiff, title, showSmallVersionTime) => (
    <>
      <h5>Do {title}:</h5>
      <div className="box_time">
        {showSmallVersionTime ? null : <p>{timeDiff.days} dni</p>}
        <p>{timeDiff.hours} h</p>
        <p>{timeDiff.minutes} min</p>
        {showSmallVersionTime ? <p>{timeDiff.seconds} s</p> : null}
      </div>
    </>
  );

  const toHolidays = timeDifference(year, 7, 1, 0, 0, 0);
  const toEndOfTheYear = timeDifference(year + 1, 0, 0, 0, 0, 0);
  const toEndOfTheDay = timeDifference(year, month, day, 23, 59, 59);
  const toEndOfTheMonth = timeDifference(
    year,
    month,
    daysInMonth(month, year),
    23,
    59,
    59
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNowForm(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Container>
      <ResultTimeBox theme={theme} themeObject={ThemeObject} >{showTime(toHolidays, "wakacji")}</ResultTimeBox>
      <ResultTimeBox theme={theme} themeObject={ThemeObject} >{showTime(toEndOfTheYear, "końca roku")}</ResultTimeBox>
      <ResultTimeBox theme={theme} themeObject={ThemeObject} >
        {showTime(toEndOfTheMonth, "końca miesiąca", false)}
      </ResultTimeBox>
      <ResultTimeBox theme={theme} themeObject={ThemeObject} >
        {showTime(toEndOfTheDay, "końca dnia", true)}
      </ResultTimeBox>
    </Container>
  );
};

export default MoreTime;
