import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import Blank from '../components/Blank';
import RecordSummaryHeader from '../components/Container/RecordSummaryHeader';
import RecordSummaryHeaderContainer from '../components/Container/RecordSummaryHeaderContainer';
import SummaryContainer from '../components/Container/SummaryContainer';
import RecordSummary from '../components/Record/RecordSummary';
import { BottomTabNavigationParam } from '../constants/navigator';
import { userState } from '../store/atoms/userAtom';
import { getRecordSummary } from '../utils';
import { getDayRecordAPI } from '../utils/api/record';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';

export default function RecordSummaryScreen({
  route,
}: NativeStackScreenProps<BottomTabNavigationParam, 'RecordSummaryScreen'>) {
  const [recordList, setList] = useState<string>(
    JSON.stringify([{ machineIdx: -1, count: [], kg: [], complete: [], length: 0 }])
  );
  const userData = useRecoilValue(userState);
  useEffect(() => {
    getDayRecordAPI({ accessToken: userData.accessToken, recordDay: route.params.day, setData: setList });
  }, [route.params.day, userData.accessToken]);
  return (
    <ScreenStyled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecordSummaryHeaderContainer routineName={route.params.routineName} />
        <ContainerStyled>
          <Blank height={getHeightPixel(20)} />
          <RecordSummaryHeader text={'황영하님의 건강해지는 몸만큼 건강한 마음도 함께 챙기세요!'} />
          <SummaryContainer set={getRecordSummary(recordList).count} kg={getRecordSummary(recordList).weight} />
          <Blank height={getHeightPixel(30)} />
          <DividerStyled />
          {JSON.parse(recordList).map((record: { machineIdx: number; kg: number[]; count: number[] }) => {
            return (
              <View key={record.machineIdx}>
                <RecordSummary
                  machineIdx={record.machineIdx}
                  kg={Math.max(...record.kg)}
                  set={Math.max(...record.count)}
                />
                <DividerStyled />
              </View>
            );
          })}
        </ContainerStyled>
      </ScrollView>
    </ScreenStyled>
  );
}

const ScreenStyled = styled.View`
  align-items: center;
  justify-content: center;
`;

const ContainerStyled = styled.View`
  width: 100%;
  height: ${getHeightPixel(771)};
  background-color: white;
  align-items: center;
`;

const DividerStyled = styled.View`
  width: ${getWidthPixel(342)};
  border-bottom-color: #dfdfdf;
  border-bottom-width: 1px;
`;
