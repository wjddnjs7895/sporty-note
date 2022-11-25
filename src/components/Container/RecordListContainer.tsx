import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components/native';
import { recordRefreshState } from '../../store/atoms/routineAtom';
import { getAsyncData, getIdxFromRecord } from '../../utils';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import PastRecordModal from '../Modal/PastRecordModal';
import RecordContainer from './RecordContainer';

export default function RecordListContainer({ workoutList, short }: { workoutList: any[]; short: boolean }) {
  const recordRefresh = useRecoilValue(recordRefreshState);
  const [recordList, setList] = useState<string>(
    JSON.stringify([{ machineIdx: -1, count: [], kg: [], complete: [], length: 0 }])
  );
  const [isVisible, setVisible] = useState(false);
  const [machineIdx, setIdx] = useState(-1);
  useEffect(() => {
    async function getData() {
      const data = await getAsyncData('recordData');
      if (data) {
        setList(JSON.stringify(data));
      }
    }
    getData();
  }, [recordRefresh.refresh]);
  return (
    <ContainerStyled height={short ? getHeightPixel(640) : getHeightPixel(500)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {workoutList.map((workout, index) => {
          return (
            <View key={index}>
              <RecordContainer
                setIdx={setIdx}
                type={0}
                setList={setList}
                recordList={recordList}
                idx={getIdxFromRecord({ machineIdx: workout.machineIdx, list: JSON.parse(recordList) })}
                imageUrl={workout.url}
                name={workout.machineName}
                machineIdx={workout.machineIdx}
                setVisible={setVisible}
              />
              <Blank height={getHeightPixel(15)} />
            </View>
          );
        })}
        <Blank height={getHeightPixel(200)} />
      </ScrollView>
      <PastRecordModal isVisible={isVisible} setVisible={setVisible} machineIdx={machineIdx} />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View<{ height: string }>`
  width: ${getWidthPixel(390)};
  ${({ height }) => css`
    height: ${height};
  `}
  margin-top: ${getHeightPixel(10)};
`;
