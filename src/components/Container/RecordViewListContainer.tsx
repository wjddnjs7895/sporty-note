import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components/native';
import { userState } from '../../store/atoms/userAtom';
import { getIdxFromRecord } from '../../utils';
import { getDayRecordAPI } from '../../utils/api/record';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import RecordContainer from './RecordContainer';

export default function RecordViewListContainer({ short, day }: { short: boolean; day: string }) {
  const [recordList, setList] = useState<string>(
    JSON.stringify([{ machineIdx: -1, count: [], kg: [], complete: [], length: 0 }])
  );
  const [isVisible, setVisible] = useState(false);
  const [machineIdx, setIdx] = useState(-1);
  const userData = useRecoilValue(userState);
  useEffect(() => {
    getDayRecordAPI({ accessToken: userData.accessToken, recordDay: day, setData: setList });
  }, [day, userData.accessToken]);
  return (
    <ContainerStyled height={short ? getHeightPixel(640) : getHeightPixel(500)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {JSON.parse(recordList).map((workout: { machineIdx: number }, index: number) => {
          return (
            <View key={index}>
              <RecordContainer
                setIdx={setIdx}
                setVisible={setVisible}
                type={1}
                setList={setList}
                recordList={recordList}
                idx={getIdxFromRecord({ machineIdx: workout.machineIdx, list: [...recordList] })}
                machineIdx={workout.machineIdx}
              />
              <Blank height={getHeightPixel(15)} />
            </View>
          );
        })}
        <Blank height={getHeightPixel(200)} />
      </ScrollView>
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
