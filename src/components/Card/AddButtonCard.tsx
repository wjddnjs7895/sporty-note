import React from 'react';
import styled from 'styled-components/native';
import { palette } from '../../constants/palette';
import { getWidthPixel } from '../../utils/responsive';
import PlusIcon from '../../assets/icons/button/plus_white.svg';

export default function AddButtonCard({ onPress }: { onPress: () => void }) {
  return (
    <ContainerStyled onPress={onPress}>
      <PlusIconStyled />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.TouchableOpacity`
  width: ${getWidthPixel(171)};
  height: ${getWidthPixel(171)};
  background-color: ${palette.none};
  border-radius: ${getWidthPixel(10)};
  border: ${getWidthPixel(3)} solid ${palette.white};
  justify-content: center;
  align-items: center;
`;

const PlusIconStyled = styled(PlusIcon)`
  width: ${getWidthPixel(50)};
  height: ${getWidthPixel(50)};
`;
