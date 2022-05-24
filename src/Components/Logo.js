import React from "react";

import styled from "styled-components";

const LogoDiv = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 70px;
    letter-spacing: 30px;
    margin: 0;
  }
`;

const Logo = () => {
  return (
    <LogoDiv>
      <h1>TIME</h1>
    </LogoDiv>
  );
};

export default Logo;
