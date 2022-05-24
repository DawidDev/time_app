import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";

// Import kontektstu
import { AppContext } from "../AppContext";

// Import obiektu motywu
import ThemeObject from "../config/configTheme";

import DisplayLaps from "../Components/DisplayLaps";

// Stylowanie komponentu StopWatch
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  button {
    font-size: 1.5rem;
    margin: 0 20px;
    border-radius: 25px;
    outline: none;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    width: 300px;
    transition: 0.1s;
    background-color: ${(props) => props.themeObject.global.colorMainButtons};

    :hover {
      cursor: pointer;
      background-color: ${(props) => props.themeObject.global.colorMainButtonsHover};
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .start_stop {
    background-color: ${(props) =>
      props.value
        ? props.theme === "light"
          ? props.themeObject.light.colorStartCalculate
          : props.themeObject.dark.colorStartCalculate
        : props.themeObject.global.colorMainButtons};
  }

  .reset:active {
    background-color: #f0694f;
  }
`;

const StopWatch = styled.div`
  font-size: 5rem;
  margin: 10vh 0;
  position: relative;

  .miliseconds_box {
    font-size: 3rem;
    margin-left: 5px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
  }
`;

const DisplayTimes = styled.p`
  p {
    border-bottom: ${(props) => props.theme === 'light' ? props.themeObject.light.colorBorderLineInStopwatch : props.themeObject.dark.colorBorderLineInStopwatch};
    margin: 10px 20%;
    font-size: 20px;
  }
`;

const Stopwatch = () => {
  const [flag, setFlag] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  // Obsługa motywu z kontekstu
  const { theme } = useContext(AppContext);

  useEffect(() => {
    const stopwatch = setTimeout(() => {
      if (flag) setSeconds((prevValue) => prevValue + 1);
    }, 1000);

    return () => clearTimeout(stopwatch);
  });

  const resetStopwatch = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setFlag(false);
  };

  if (seconds > 59) {
    setSeconds(0);
    setMinutes((prevValue) => prevValue + 1);
  }

  if (minutes > 59) {
    setMinutes(0);
    setHours((prevValue) => prevValue + 1);
  }

  const displayStopwatch = (
    <span>
      {
        hours > 0
          ? `${hours}:`
          : "" /* Wyświetlanie dopiero gdy jest większe od 0 */
      }
      {minutes > 0 || hours > 0
        ? minutes <= 9 && hours > 0
          ? `0${minutes}:`
          : `${minutes}:`
        : ""}
      {seconds <= 9 ? `0${seconds}` : seconds}
      {/* <span className='miliseconds_box'>:{milicesonds <= 9 ? `0${milicesonds}` : milicesonds }</span>*/}
    </span>
  );

  return (
    <Container theme={theme} themeObject={ThemeObject}>
      <StopWatch>{displayStopwatch}</StopWatch>
      <Buttons value={flag} themeObject={ThemeObject}>
        <button
          className="start_stop"
          onClick={() => {
            setFlag((prevValue) => !prevValue);
          }}
        >
          {flag ? "Stop" : "Start"}
        </button>
        <button className="reset" onClick={resetStopwatch.bind(this)}>
          Reset
        </button>
      </Buttons>
      <DisplayTimes theme={theme} themeObject={ThemeObject}>
        <DisplayLaps seconds={seconds} minutes={minutes} hours={hours} />
      </DisplayTimes>
    </Container>
  );
};

export default Stopwatch;
