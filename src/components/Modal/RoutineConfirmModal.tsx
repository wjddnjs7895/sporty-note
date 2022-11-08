import React from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components/native';

import { RoutineDeleteModalProps, ModalStyle } from '../../constants/types';
import { routineRefreshState } from '../../store/atoms/routineAtom';
import { userState } from '../../store/atoms/userAtom';
import { deleteRoutineAPI } from '../../utils/api/routine';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import SubHeadText from '../Text/SubHeadText';
function RoutineConfirmModal({
  questionText,
  yesText,
  noText,
  width,
  height,
  isVisible,
  setVisible,
  routineName,
}: RoutineDeleteModalProps) {
  const userData = useRecoilValue(userState);
  const [refresh, setRefresh] = useRecoilState(routineRefreshState);
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
          <ButtonStyled
            onPress={() => {
              deleteRoutineAPI({ routineName: routineName, accessToken: userData.accessToken });
              setRefresh({ refresh: !refresh });
              if (setVisible !== undefined) {
                setVisible(false);
              }
            }}
          >
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

export default RoutineConfirmModal;
