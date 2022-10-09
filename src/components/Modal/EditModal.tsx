import React, { useState } from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import styled, { css } from 'styled-components/native';

import { getWidthPixel, getHeightPixel, getPixelToNumber } from '../../utils/responsive';
import { modifyMemoSelector } from '../../store/selectors/noteSelector';

import { EditModalProps, ModalStyle } from '../../constants/types';
import { EDIT__MODAL__TEXT } from '../../constants/text';
import BodyText from '../Text/BodyText';
import { palette } from '../../constants/palette';
import ConfirmModal from './ConfirmModal';
import { CONFIRM__MODAL__TEXT } from '../../constants/text';
import MemoInputModal from './MemoInputModal';

function EditModal({ location, isVisible, setVisible, ...note }: EditModalProps) {
  const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
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
        <ContainerStyled location={location}>
          <InnerButtonStyled onPress={() => modifyMemoSelector({ ...note })}>
            <BodyText fontNumber={4}>{EDIT__MODAL__TEXT[0][0]}</BodyText>
          </InnerButtonStyled>
          <DividerStyled />
          <InnerButtonStyled onPress={() => setConfirmVisible(true)}>
            <BodyText fontNumber={4}>{EDIT__MODAL__TEXT[1][0]}</BodyText>
          </InnerButtonStyled>
        </ContainerStyled>
        {confirmVisible ? (
          <ConfirmModal
            questionText={CONFIRM__MODAL__TEXT[0][0]}
            yesText={CONFIRM__MODAL__TEXT[1][0]}
            noText={CONFIRM__MODAL__TEXT[2][0]}
            isVisible={confirmVisible}
            setVisible={setConfirmVisible}
            nodeIdx={note.nodeIdx}
          />
        ) : null}
        {inputVisible ? (
          <MemoInputModal
            setVisible={() => setInputVisible(false)}
            goBack={() => setInputVisible(false)}
            inputType={1}
            isVisible={inputVisible}
            nodeIdx={note.nodeIdx}
            machineIdx={note.machineIdx || 0}
            krMachineName={note.type.krName}
            engMachineName={note.type.engName}
            text={note.text}
            body={note.body}
          />
        ) : null}
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

const InnerButtonStyled = styled.TouchableOpacity`
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
