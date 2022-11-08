import React from 'react';
import styled from 'styled-components/native';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import BodyText from '../Text/BodyText';

export default function RecordColumnHeaderContainer() {
  return (
    <HeaderStyled>
      <BodyText fontNumber={2} fontColor={palette.white}>
        세트
      </BodyText>
      <Blank width={getWidthPixel(65)} />
      <BodyText fontNumber={2} fontColor={palette.white}>
        kg
      </BodyText>
      <Blank width={getWidthPixel(65)} />
      <BodyText fontNumber={2} fontColor={palette.white}>
        개수
      </BodyText>
      <Blank width={getWidthPixel(65)} />
      <BodyText fontNumber={2} fontColor={palette.white}>
        완료
      </BodyText>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.View`
  width: ${getWidthPixel(358)};
  height: ${getHeightPixel(28)};
  border-radius: ${getWidthPixel(10)};
  background-color: ${palette.gray_06};
  margin-top: ${getHeightPixel(20)};
  margin-bottom: ${getHeightPixel(10)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
