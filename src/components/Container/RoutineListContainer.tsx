import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import { routineRefreshState } from '../../store/atoms/routineAtom';
import { userState } from '../../store/atoms/userAtom';
import { getRoutineAPI } from '../../utils/api';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import AddRoutineButton from '../Button/AddRoutineButton';
import RoutineButton from '../Button/RoutineButton';
import AddRoutineModal from '../Modal/AddRoutineModal';

import SubHeadText from '../Text/SubHeadText';

function RoutineListContainer() {
  const [isVisible, setVisible] = useState<boolean>(false);
  const userData = useRecoilValue(userState);
  const [routineList, setList] = useState<string[]>([]);
  const refresh = useRecoilValue(routineRefreshState);
  useEffect(() => {
    getRoutineAPI({ accessToken: userData.accessToken, setList: setList });
  }, [isVisible, userData.accessToken, refresh]);
  return (
    <ContainerStyled>
      <AddRoutineModal routineList={[]} isVisible={isVisible} setVisible={setVisible} name={''} inputType={0} />
      <InnerContainerStyled>
        <HeaderStyled>
          <SubHeadText fontNumber={1}>오늘의 운동</SubHeadText>
        </HeaderStyled>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Blank height={getHeightPixel(12)} />
          {routineList.map((routine: string) => {
            return <RoutineButton key={routine} routineName={routine} />;
          })}
          <Blank height={getHeightPixel(12)} />
          <AddRoutineButton onPress={() => setVisible(true)} />
          <Blank height={getHeightPixel(70)} />
        </ScrollView>
      </InnerContainerStyled>
    </ContainerStyled>
  );
}

export default RoutineListContainer;

const InnerContainerStyled = styled.View`
  width: ${getWidthPixel(358)};
  height: ${getHeightPixel(300)};
`;

const HeaderStyled = styled.View`
  padding-left: ${getWidthPixel(7)};
`;

const ContainerStyled = styled.View`
  width: ${getWidthPixel(390)};
  align-items: center;
`;
