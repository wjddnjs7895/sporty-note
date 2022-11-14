import React from 'react';
import styled from 'styled-components/native';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';

import CheckOnIcon from '../../assets/icons/check/check_on.svg';
import CheckOffIcon from '../../assets/icons/check/check_off.svg';

export default function RecordView({
  set,
  weight,
  count,
  completeValue,
}: {
  set: number;
  weight: number;
  count: number;
  completeValue: boolean;
}) {
  return (
    <ContainerStyled>
      <SetContainerStyled>
        <SubHeadText fontNumber={5}>{set}</SubHeadText>
      </SetContainerStyled>
      <WeightContainerStyled>
        <SubHeadText fontNumber={5}>{weight}</SubHeadText>
      </WeightContainerStyled>
      <CountContainerStyled>
        <SubHeadText fontNumber={5}>{count}</SubHeadText>
      </CountContainerStyled>
      <CompleteContainerStyled>
        {completeValue ? <CheckOnIconStyled /> : <CheckOffIconStyled />}
      </CompleteContainerStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  flex-direction: row;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixel(36)};
  align-items: center;
  margin-left: ${getWidthPixel(90)};
`;

const CheckOnIconStyled = styled(CheckOnIcon)`
  width: ${getWidthPixel(25)};
  height: ${getWidthPixel(25)};
  margin-left: ${getWidthPixel(5)};
`;

const CheckOffIconStyled = styled(CheckOffIcon)`
  width: ${getWidthPixel(25)};
  height: ${getWidthPixel(25)};
`;

const SetContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(-20)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;

const WeightContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(65)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;

const CountContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(150)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;

const CompleteContainerStyled = styled.TouchableOpacity`
  position: absolute;
  left: ${getWidthPixel(240)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;
