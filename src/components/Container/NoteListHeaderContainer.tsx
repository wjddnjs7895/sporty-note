import React from 'react';
import styled from 'styled-components/native';

import TitleText from '../Text/TitleText';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Button from '../Button';
//import BodyText from '../Text/BodyText';

function NoteListHeaderContainer() {
  return (
    <ContainerStyled>
      <TitleText>노트 리스트</TitleText>
      {/* <ButtonStyled
        buttonColor={'black'}
        height={getHeightPixel(30)}
        width={getWidthPixel(48)}
        borderRadius={getPixelToPixel(21)}
      >
        <BodyText fontNumber={5} fontColor={'white'}>
          추가
        </BodyText>
      </ButtonStyled> */}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  flex-direction: row;
  padding-left: ${getWidthPixel(24)};
  height: ${getHeightPixel(73)};
  align-items: center;
`;

const ButtonStyled = styled(Button)`
  position: absolute;
  right: ${getWidthPixel(16)};
  align-items: center;
  justify-content: center;
`;

export default NoteListHeaderContainer;
