import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';

import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import Blank from '../Blank';
import { getPastRecordAPI } from '../../utils/api/record';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms/userAtom';

import ExitIcon from '../../assets/icons/button/exit.svg';
import HeadText from '../Text/HeadText';
import { getPastRecordSummary } from '../../utils';
import PastSummaryContainer from '../Container/PastSummaryContainer';

export default function PastRecordModal({
  isVisible,
  setVisible,
  machineIdx,
}: {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  machineIdx: number;
}) {
  const userData = useRecoilValue(userState);
  const [recordData, setData] = useState<string>(
    JSON.stringify([{ machineIdx: -1, count: [], kg: [], complete: [], length: 0 }])
  );
  useEffect(() => {
    getPastRecordAPI({ accessToken: userData.accessToken, machineIdx: machineIdx, setData: setData });
  }, [userData.accessToken, machineIdx]);
  return (
    <>
      <ModalStyled
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
          <TitleStyled fontNumber={2}>이전기록</TitleStyled>
          <InnerButtonStyled onPress={() => setVisible(false)}>
            <IcontStyled />
          </InnerButtonStyled>
          <Blank height={getHeightPixel(50)} />
          <PastSummaryContainer
            maxkg={getPastRecordSummary(recordData).maxkg}
            kg={getPastRecordSummary(recordData).kg}
          />
        </ContainerStyled>
      </ModalStyled>
    </>
  );
}

const ModalStyled = styled(Modal)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -${getWidthPixel(20)};
  top: -${getHeightPixel(20)};
  background-color: #00000080;
`;

const TitleStyled = styled(HeadText)`
  position: absolute;
  left: ${getWidthPixel(24)};
  margin-top: ${getWidthPixel(30)};
`;

const ContainerStyled = styled.View`
  position: absolute;
  bottom: 0;
  width: ${getWidthPixel(390)};
  height: ${getHeightPixel(224)}
  background-color: white;
  border-radius: ${getWidthPixel(20)};
  align-items: center;
`;

const InnerButtonStyled = styled.TouchableOpacity`
  margin-top: ${getWidthPixel(30)};
  position: absolute;
  right: ${getWidthPixel(10)};
`;

const IcontStyled = styled(ExitIcon)`
  width: ${getWidthPixel(30)};
  height: ${getHeightPixel(30)};
`;
