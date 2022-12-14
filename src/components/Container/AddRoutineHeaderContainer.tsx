import React from 'react';
import styled from 'styled-components/native';
import { palette } from '../../constants/palette';
import { HeaderProps } from '../../constants/types';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import Button from '../Button';
import BackButton from '../Button/BackButton';
import BodyText from '../Text/BodyText';

function AddRoutineHeaderContainer({ goBack, submit, setTitle, title }: HeaderProps) {
  return (
    <ContainerStyled>
      <BackButtonStyled>
        <BackButton onPress={goBack} />
      </BackButtonStyled>
      <TextInputStyled
        placeholder="루틴 명을 입력해주세요"
        defaultValue={title}
        onChangeText={text => {
          if (setTitle) {
            setTitle(text);
          }
        }}
      />
      <ButtonTypeStyled>
        <ButtonStyled
          width={getWidthPixel(48)}
          height={getHeightPixel(30)}
          borderRadius={getPixelToPixel(21)}
          buttonColor={'black'}
          hasShadow={false}
          onPress={() => {
            if (submit) {
              submit();
            }
          }}
        >
          <TextStyled fontNumber={5} fontColor="white">
            저장
          </TextStyled>
        </ButtonStyled>
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
  width: ${getWidthPixel(390)};
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

const TextInputStyled = styled.TextInput.attrs({
  placeholderTextColor: '#ededed',
  selectionColor: palette.lime_01,
})`
  font-size: ${getPixelToPixel(18)};
  font-family: 'Pretendard-Bold';
  width: ${getWidthPixel(280)};
`;

export default AddRoutineHeaderContainer;
