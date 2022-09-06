import React from 'react';
import styled from 'styled-components/native';

import { getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { DayProps } from '../../constants/types';
import SubHeadText from '../Text/SubHeadText';
import { palette } from '../../constants/palette';
import Blank from '../Blank';

function DayBox({ day, isFull }: DayProps) {
  return (
    <DayStyled>
      <SubHeadText fontNumber={day}>1</SubHeadText>
      <Blank height={getWidthPixel(10)} />
      {isFull ? <IndexStyled /> : null}
    </DayStyled>
  );
}

const IndexStyled = styled.View`
  width: ${getPixelToPixel(5)};
  height: ${getPixelToPixel(5)};
  border-radius: ${getPixelToPixel(5)};
  background-color: ${palette.gray_07};
`;

const DayStyled = styled.View`
  width: ${getWidthPixel(50)};
  height: ${getWidthPixel(50)};
  align-items: center;
`;

export default DayBox;
