import React, { useState } from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getHeightPixelByWidth, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';

import Right_Arrow_Icon from '../../assets/icons/button/right_arrow.svg';
import ReadyModal from '../Modal/ReadyModal';

function RoutineButton({ routineName }: { routineName: string }) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <ContainerStyled onPress={() => setVisible(true)}>
      <ReadyModal isVisible={visible} setVisible={setVisible} />
      <SubHeadText fontNumber={3}>{routineName}</SubHeadText>
      <ArrowStyled />
    </ContainerStyled>
  );
}

export default RoutineButton;

const ContainerStyled = styled.TouchableOpacity`
  width: ${getWidthPixel(358)};
  height: ${getHeightPixelByWidth(358, 51)};
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${getWidthPixel(10)};
  align-items: center;
  padding-left: ${getWidthPixel(27)};
  padding-right: ${getWidthPixel(10)};
  background-color: white;
  margin-top: ${getHeightPixel(4)};
  margin-bottom: ${getHeightPixel(4)};
`;

const ArrowStyled = styled(Right_Arrow_Icon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;
