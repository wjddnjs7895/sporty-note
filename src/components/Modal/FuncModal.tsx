import React, { Dispatch, SetStateAction } from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import styled, { css } from 'styled-components/native';

import { ModalStyle } from '../../constants/types';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import SubHeadText from '../Text/SubHeadText';
function FuncModal({
  questionText,
  yesText,
  noText,
  width,
  height,
  isVisible,
  setVisible,
  func,
}: {
  width: string;
  height: string;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  goBack?: () => void;
  questionText?: string;
  yesText?: string;
  noText?: string;
  func: () => void;
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => {
        if (setVisible !== undefined) {
          setVisible(false);
        }
      }}
      backdropOpacity={0}
      animationInTiming={1}
      animationOutTiming={1}
    >
      <ContainerStyled width={width} height={height}>
        <SubHeadText fontNumber={3}>{questionText}</SubHeadText>
        <Blank height={getHeightPixel(50)} />
        <InnerContainerStyled>
          <ButtonStyled onPress={func}>
            <SubHeadText fontNumber={4} fontColor={'white'}>
              {yesText}
            </SubHeadText>
          </ButtonStyled>
          <Blank width={getWidthPixel(10)} />
          <ButtonStyled
            onPress={() => {
              if (setVisible !== undefined) {
                setVisible(false);
              }
            }}
          >
            <SubHeadText fontNumber={4} fontColor={'white'}>
              {noText}
            </SubHeadText>
          </ButtonStyled>
        </InnerContainerStyled>
      </ContainerStyled>
    </Modal>
  );
}

const ContainerStyled = styled.View<ModalStyle>`
  ${({ width = getWidthPixel(352), height = getHeightPixel(224) }) => css`
    width: ${width};
    height: ${height};
  `}
  border-radius: ${getWidthPixel(10)};
  background-color: white;
  align-items: center;
  justify-content: center;
  ${Platform.select({
    ios: css`
      shadow-color: '#000000'; 
      shadow-offset: {width: 1, height: 1};
      shadow-opacity: 0.15;
      shadow-radius:10px;
    `,
    android: css`
      elevation: 10;
    `,
  })}
`;

const InnerContainerStyled = styled.View`
  flex-direction: row;
`;

const ButtonStyled = styled.TouchableOpacity`
  background-color: black;
  width: ${getWidthPixel(148)};
  height: ${getHeightPixel(40)};
  border-radius: ${getWidthPixel(30)};
  align-items: center;
  justify-content: center;
`;

export default FuncModal;
