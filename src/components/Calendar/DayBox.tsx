import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components/native';

import { getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { DayColorProps, DayProps, StyleProps } from '../../constants/types';
import SubHeadText from '../Text/SubHeadText';
import { palette } from '../../constants/palette';
import Blank from '../Blank';
import { format } from 'date-fns';
import { getDayColor } from '../../utils';

function DayBox({ day, isFull, isSelected, isToday, onDateClick }: DayProps) {
  const [dayColor, setDayColor] = useState<DayColorProps>({ backgroundColor: 'none', fontColor: 'black' });
  useEffect(() => {
    setDayColor(getDayColor({ isSelected, isToday }));
  }, [isSelected, isToday]);
  return (
    <BoxStyled onPress={() => onDateClick(day)}>
      {typeof day !== 'string' ? (
        <DayStyled backgroundColor={dayColor.backgroundColor}>
          <SubHeadText fontNumber={1} fontColor={dayColor.fontColor}>
            {format(day, 'd')}
          </SubHeadText>
        </DayStyled>
      ) : null}
      <Blank height={getWidthPixel(5)} />
      {isFull && typeof day !== 'string' ? <IndexStyled /> : null}
    </BoxStyled>
  );
}

const IndexStyled = styled.View`
  width: ${getPixelToPixel(5)};
  height: ${getPixelToPixel(5)};
  border-radius: ${getPixelToPixel(5)};
  background-color: ${palette.gray_07};
`;

const BoxStyled = styled.TouchableOpacity`
  width: ${getWidthPixel(50)};
  height: ${getWidthPixel(50)};
  align-items: center;
`;

const DayStyled = styled.View<StyleProps>`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
  border-radius: ${getWidthPixel(35)};
  align-items: center;
  justify-content: center;
  ${({ backgroundColor = 'none' }) => css`
    background-color: ${palette[backgroundColor]};
  `}
`;

export default DayBox;
