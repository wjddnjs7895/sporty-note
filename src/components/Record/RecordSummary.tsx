import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import { RESOURCE_PREFIX } from '../../constants';
import { userState } from '../../store/atoms/userAtom';
import { getMachineDataAPI } from '../../utils/api/machine';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import BodyText from '../Text/BodyText';
import SubHeadText from '../Text/SubHeadText';

export default function RecordSummary({ machineIdx, kg, set }: { machineIdx: number; kg: number; set: number }) {
  const [workoutData, setData] = useState<{ name: string; imageUrl: string }>({ name: '', imageUrl: '' });
  const userData = useRecoilValue(userState);
  useEffect(() => {
    getMachineDataAPI({ machineIdx: machineIdx, accessToken: userData.accessToken, setData: setData });
  }, [machineIdx, userData.accessToken]);
  return (
    <ContainerStyled>
      <ImageStyled source={{ uri: RESOURCE_PREFIX + workoutData.imageUrl }} />
      <SubHeadText fontNumber={4}>{workoutData.name}</SubHeadText>
      <InnerContainerStyled>
        <BodyText fontNumber={4}>
          {kg}kg X {set}회
        </BodyText>
      </InnerContainerStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: ${getWidthPixel(342)};
  height: ${getHeightPixel(62)};
  flex-direction: row;
  align-items: center;
`;

const InnerContainerStyled = styled.View`
  position: absolute;
  right: ${getWidthPixel(24)};
`;

const ImageStyled = styled.Image`
  width: ${getWidthPixel(40)};
  height: ${getWidthPixel(40)};
  margin-right: ${getWidthPixel(20)};
`;
