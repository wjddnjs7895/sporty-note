import React from 'react';
import styled from 'styled-components/native';
import { palette } from '../../constants/palette';
import { NoteScreenHeaderProps } from '../../constants/types';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import Button from '../Button';
import BackButton from '../Button/BackButton';
import FavoriteButton from '../Button/FavoriteButton';
import BodyText from '../Text/BodyText';
import HeadText from '../Text/HeadText';

function NoteHeaderContainer({ goBack, isInput }: NoteScreenHeaderProps) {
  return (
    <ContainerStyled>
      <BackButtonStyled>
        <BackButton onPress={goBack} />
      </BackButtonStyled>
      <HeadText fontNumber={2}>바벨 플랫 벤치 프레스</HeadText>
      <ButtonTypeStyled>
        {isInput ? (
          <ButtonStyled
            width={getWidthPixel(48)}
            height={getHeightPixel(30)}
            borderRadius={getPixelToPixel(21)}
            buttonColor={'black'}
            hasShadow={false}
          >
            <TextStyled fontNumber={5} fontColor="white">
              저장
            </TextStyled>
          </ButtonStyled>
        ) : (
          <FavoriteButton isSelected={false} buttonColor="white" />
        )}
      </ButtonTypeStyled>
    </ContainerStyled>
  );
}

const TextStyled = styled(BodyText)`
  text-align: center;
`;

const ContainerStyled = styled.View`
  flex-direction: row;
  height: ${getHeightPixel(60)};
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${palette.gray_06};
`;

const BackButtonStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(11)};
`;

const ButtonTypeStyled = styled.View`
  position: absolute;
  right: ${getWidthPixel(15)};
`;

const ButtonStyled = styled(Button)`
  justify-content: center;
`;

export default NoteHeaderContainer;
