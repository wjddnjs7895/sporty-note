import React from 'react';
import styled from 'styled-components/native';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import TitleText from '../Text/TitleText';

export default function SearchHeaderContainer() {
  return (
    <ContainerStyled>
      <TitleText fontNumber={1}>검색</TitleText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  height: ${getHeightPixel(74)};
  width: 100%;
  justify-content: center;
  background-color: ${palette.gray_06};
  padding-left: ${getWidthPixel(24)};
`;
