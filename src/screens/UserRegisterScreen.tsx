import React from 'react';
import styled from 'styled-components/native';

import Logo_Gradient from '../assets/logo/logo_gradient.png';
import Lettering_Black from '../assets/logo/lettering_black.png';
import { getWidthPixel, getHeightPixel } from '../utils/responsive';

const UserRegisterScreen = () => {
  return (
    <>
      <LogoStyled source={Logo_Gradient} />
      <LetterStyled source={Lettering_Black} />
    </>
  );
};

const LogoStyled = styled.Image`
  position: absolute;
  resize-mode: contain;
  width: ${getWidthPixel(877)};
  height: ${getWidthPixel(954)};
  left: ${getWidthPixel(-270)};
  top: ${getHeightPixel(-320)};
  transform: rotate(33deg);
`;

const LetterStyled = styled.Image`
  position: absolute;
  left: ${getWidthPixel(45)};
  top: ${getHeightPixel(180)};
  resize-mode: contain;
  width: ${getWidthPixel(300)};
  height: ${getWidthPixel(110)};
`;

export default UserRegisterScreen;
