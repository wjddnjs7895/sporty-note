import React from 'react';
import styled, { css } from 'styled-components/native';

import { ImageStyle } from '../../constants/types';
import { getWidthPixel, getPixelToPixel, getHeightPixel } from '../../utils/responsive';

import { RESOURCE_PREFIX } from '../../constants';
import Delete_Routine_Icon from '../../assets/icons/button/delete_record.svg';

function RoutineCard({ onPress, imageUrl1 }: { onPress: () => void; imageUrl1: string }) {
  return (
    <CardStyled onPress={onPress}>
      <ImageStyled source={{ uri: RESOURCE_PREFIX + imageUrl1 }} />
      <DeleteStyled />
    </CardStyled>
  );
}

const DeleteStyled = styled(Delete_Routine_Icon)`
  width: ${getWidthPixel(24)};
  height: ${getWidthPixel(24)};
  position: absolute;
  left: ${getWidthPixel(65)};
  bottom: ${getWidthPixel(65)};
`;

const CardStyled = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${getPixelToPixel(10)};
  background-color: white;
  width: ${getWidthPixel(80)};
  height: ${getWidthPixel(80)};
  margin-bottom: ${getHeightPixel(30)};
  margin-top: ${getHeightPixel(10)};
  margin-left: ${getWidthPixel(10)};
  margin-right: ${getWidthPixel(10)};
`;

const ImageStyled = styled.Image<ImageStyle>`
  resize-mode: contain;
  ${({ width = getWidthPixel(72) }) => css`
    width: ${width};
    height: ${width};
  `}
`;

export default RoutineCard;
