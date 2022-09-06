import React from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import styled, { css } from 'styled-components/native';

import { getWidthPixel, getHeightPixel, getPixelToNumber } from '../../utils/responsive';

import { ModalProps, ModalStyle } from '../../constants/types';
import { EDIT__MODAL__TEXT } from '../../constants/text';
import BodyText from '../Text/BodyText';
import { palette } from '../../constants/palette';

function EditModal({ location, isVisible, setVisible }: ModalProps) {
  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setVisible(false)}
        backdropOpacity={0}
        animationInTiming={1}
        animationOutTiming={1}
      >
        <ContainerStyled location={location}>
          <InnerContainerStyled>
            <BodyText fontNumber={4}>{EDIT__MODAL__TEXT[0][0]}</BodyText>
          </InnerContainerStyled>
          <DividerStyled />
          <InnerContainerStyled>
            <BodyText fontNumber={4}>{EDIT__MODAL__TEXT[1][0]}</BodyText>
          </InnerContainerStyled>
        </ContainerStyled>
      </Modal>
    </>
  );
}

const ContainerStyled = styled.View<ModalStyle>`
  position: absolute;
  ${({ location = [0, 0] }) =>
    css`
      left: ${(location[0] - getPixelToNumber(90)).toString() + 'px'};
      top: ${(location[1] + getPixelToNumber(5)).toString() + 'px'};
    `};
  align-items: center;
  width: ${getWidthPixel(85)};
  background-color: white;
  border-radius: ${getWidthPixel(5)};
  ${Platform.select({
    ios: css`
      shadow-color: '#000000'; 
      shadow-offset: {width: 1, height: 1};
      shadow-opacity: 0.25;
      shadow-radius:10;
    `,
    android: css`
      elevation: 10;
    `,
  })}
`;

const InnerContainerStyled = styled.View`
  height: ${getHeightPixel(40)};
  justify-content: center;
  text-align: center;
`;

const DividerStyled = styled.View`
  border-bottom-color: ${palette.gray_06};
  border-bottom-width: 1px;
  width: ${getWidthPixel(71)};
`;

export default EditModal;
