import React, { useContext, useState } from "react";
import Switch from "@mui/material/Switch";
import styled from "styled-components";

import ThemeObject from "../config/configTheme"
import Logo from "../Components/Logo";

// Importujemy nasz appContext
import { AppContext } from "../AppContext";

const HeaderContainer = styled.div`
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    color: ${(props) => (props.theme === "light" ? props.themeObject.light.colorHeader : props.themeObject.dark.colorHeader)};
`

const SwitchElement = styled.div`
  width: 50px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const Header = () => {
  const { setTheme } = useContext(AppContext);
  const { theme } = useContext(AppContext);

  const [switchBtn, setSwitchBtn] = useState(false);
  const handleSwitchBtn = () => {
    setSwitchBtn((prevValue) => !prevValue);
    setTheme();
  };

  console.log(ThemeObject)
  return (
    <HeaderContainer theme={theme} themeObject = {ThemeObject}>
      <Logo />
      <SwitchElement>
        <Switch
          checked={switchBtn}
          onChange={handleSwitchBtn}
          inputProps={{ "aria-label": "controlled" }}
          size={"medium"}
          color={"info"}
        />
      </SwitchElement>
    </HeaderContainer>
  );
};

export default Header;
