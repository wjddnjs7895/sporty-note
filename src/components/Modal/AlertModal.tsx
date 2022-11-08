import React from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import styled, { css } from 'styled-components/native';

import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import { ModalProps } from '../../constants/types';
import SubHeadText from '../Text/SubHeadText';
import { palette } from '../../constants/palette';
import Blank from '../Blank';

function AlertModal({ isVisible, setVisible, questionText }: ModalProps) {
  return (
    <>
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
        <ContainerStyled>
          <SubHeadText fontNumber={3}>{questionText}</SubHeadText>
          <Blank height={getHeightPixel(30)} />
          <InnerButtonStyled onPress={() => setVisible(false)}>
            <SubHeadText fontNumber={4} fontColor={palette.white}>
              확인
            </SubHeadText>
          </InnerButtonStyled>
        </ContainerStyled>
      </Modal>
    </>
  );
}

const ContainerStyled = styled.View`
  width: ${getWidthPixel(352)};
  height: ${getHeightPixel(224)}
  background-color: white;
  border-radius: ${getWidthPixel(5)};
  justify-content: center;
  align-items: center;
  ${Platform.select({
    ios: css`
      shadow-color: '#000000'; 
      shadow-offset: {width: 1, height: 1};
      shadow-opacity: 0.25;
      shadow-radius:10px;
    `,
    android: css`
      elevation: 10;
    `,
  })}
`;

const InnerButtonStyled = styled.TouchableOpacity`
  height: ${getHeightPixel(40)};
  border-radius: ${getWidthPixel(30)};
  width: ${getWidthPixel(148)}
  justify-content: center;
  text-align: center;
  background-color: ${palette.black};
  align-items: center;
`;

export default AlertModal;
