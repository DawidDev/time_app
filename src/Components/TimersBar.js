import React, { useContext } from "react";
import styled from "styled-components";

// Importujemy nasz appContext
import { AppContext } from "../AppContext";

// Importujemy obiekt motywu
import ThemeObject from "../config/configTheme";

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  //border: 1px solid red;
`;

const Button = styled.button`
  padding: 5px 15px;
  outline: ${(props) =>
    props.active
      ? props.theme === "light"
        ? props.themeObject.light.colorTimersBarBorder
        : props.themeObject.dark.colorTimersBarBorder
      : "1.5px solid transparent"};
  font-size: 1rem;
  background-color: transparent;
  border: 0;
  border-radius: 10px;
  transition: 0.25s;
  color: ${(props) =>
    props.theme === "light"
      ? props.themeObject.light.colorTimersBar
      : props.themeObject.dark.colorTimersBar};

  &:hover {
    cursor: pointer;
  }
`;

const TimersBar = ({ handler, activeButton }) => {
  const { theme } = useContext(AppContext);

  const buttonsProperty = [
    {
      title: "Stoper",
      name: "stopwatch",
    },
    {
      title: "Timer",
      name: "timer",
    },
    {
      title: "Alarm",
      name: "alarm",
    },
    {
      title: "Więcej..",
      name: "more_time",
    },
  ];
  const Buttons = buttonsProperty.map((item) => (
    <Button
      theme={theme}
      themeObject={ThemeObject}
      active={activeButton === item.name ? true : false}
      onClick={handler.bind(this, item.name)}
    >
      {item.title}
    </Button>
  ));

  return <Container>{Buttons}</Container>;
};

export default TimersBar;

// color: ${props => props.active ? "black" : "black"};

/*

<Button active={activeButton === "stopwatch" ? true : false} onClick={handler.bind(this, 'stopwatch')}>Stopwatch</Button>
<Button onClick={handler.bind(this, 'timer')}>Timer</Button>
<Button onClick={handler.bind(this, 'alarm')}>Alarm</Button>
<Button onClick={handler.bind(this, 'more_time')}>More time</Button>

*/
