import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import styled, { css } from 'styled-components/native';

import { getWidthPixel, getHeightPixel, getPixelToNumber } from '../../utils/responsive';

import { ModalStyle } from '../../constants/types';
import { EDIT__MODAL__TEXT } from '../../constants/text';
import BodyText from '../Text/BodyText';
import { palette } from '../../constants/palette';
import { CONFIRM__MODAL__TEXT } from '../../constants/text';
import RoutineConfirmModal from './RoutineConfirmModal';
import AddRoutineModal from './AddRoutineModal';
import { getRoutineMachinesByNumber } from '../../utils/api/routine';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms/userAtom';

function EditRoutineModal({
  location,
  isVisible,
  setVisible,
  routineName,
}: {
  location: number[];
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  routineName: string;
}) {
  const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const userData = useRecoilValue(userState);
  const [list, setList] = useState<number[]>([]);
  useEffect(() => {
    getRoutineMachinesByNumber({
      routineName: routineName,
      accessToken: userData.accessToken,
      setList: setList,
    });
  }, [routineName, userData.accessToken]);
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
          <InnerButtonStyled onPress={() => setInputVisible(true)}>
            <BodyText fontNumber={4}>{EDIT__MODAL__TEXT[0][0]}</BodyText>
          </InnerButtonStyled>
          <DividerStyled />
          <InnerButtonStyled
            onPress={() => {
              setConfirmVisible(true);
            }}
          >
            <BodyText fontNumber={4}>{EDIT__MODAL__TEXT[1][0]}</BodyText>
          </InnerButtonStyled>
        </ContainerStyled>
        {confirmVisible ? (
          <RoutineConfirmModal
            questionText={'루틴을 삭제하시겠습니까?'}
            yesText={CONFIRM__MODAL__TEXT[1][0]}
            noText={CONFIRM__MODAL__TEXT[2][0]}
            isVisible={confirmVisible}
            setVisible={setConfirmVisible}
            routineName={routineName}
          />
        ) : null}
        {inputVisible ? (
          <AddRoutineModal
            routineList={list}
            name={routineName}
            inputType={1}
            isVisible={inputVisible}
            setVisible={setInputVisible}
            setModalVisible={setVisible}
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
      shadow-radius:10px;
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

export default EditRoutineModal;
