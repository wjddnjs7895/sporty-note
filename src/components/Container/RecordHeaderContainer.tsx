import React from 'react';
import styled from 'styled-components/native';
import { RESOURCE_PREFIX } from '../../constants';
import { getWidthPixel } from '../../utils/responsive';
import BodyText from '../Text/BodyText';
import SubHeadText from '../Text/SubHeadText';

import RightArrowIcon from '../../assets/icons/button/right_arrow.svg';
import Blank from '../Blank';

export default function RecordHeaderContainer({ imageUrl, name }: { imageUrl: string; name: string }) {
  return (
    <ContainerStyled>
      <ImageStyled source={{ uri: RESOURCE_PREFIX + imageUrl }} />
      <Blank width={getWidthPixel(10)} />
      <SubHeadText fontNumber={2}>{name}</SubHeadText>
      <ButtonStyled>
        <BodyText fontNumber={5}>이전기록</BodyText>
      </ButtonStyled>
      <ArrowStyled />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: ${getWidthPixel(358)};
  flex-direction: row;
  align-items: center;
`;

const ImageStyled = styled.Image`
  width: ${getWidthPixel(54)};
  height: ${getWidthPixel(54)};
  border: ${getWidthPixel(1)} solid #949498;
  border-radius: ${getWidthPixel(30)};
`;

const ButtonStyled = styled.TouchableOpacity`
  border-bottom: solid;
  position: absolute;
  right: ${getWidthPixel(50)};
`;

const ArrowStyled = styled(RightArrowIcon)`
  width: ${getWidthPixel(24)};
  height: ${getWidthPixel(24)};
  position: absolute;
  right: ${getWidthPixel(0)};
`;
