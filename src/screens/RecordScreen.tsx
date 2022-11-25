import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import Blank from '../components/Blank';
import NoteHeaderContainer from '../components/Container/NoteHeaderContainer';
import RecordArrowContainer from '../components/Container/RecordArrowContainer';
import RecordContainer from '../components/Container/RecordContainer';
import Note from '../components/Note';
import { NOTE__DATA } from '../constants';
import { BottomTabNavigationParam, NavigationProps } from '../constants/navigator';
import { recordRefreshState } from '../store/atoms/routineAtom';
import { userState } from '../store/atoms/userAtom';
import { getAsyncData, getIdxFromRecord } from '../utils';
import { setNoteAPI } from '../utils/api';
import { getHeightPixel } from '../utils/responsive';

export default function RecordScreen({ route }: NativeStackScreenProps<BottomTabNavigationParam, 'RecordScreen'>) {
  const recordRefresh = useRecoilValue(recordRefreshState);
  const [recordList, setList] = useState<string>(
    JSON.stringify([{ machineIdx: -1, count: [], kg: [], complete: [], length: 0 }])
  );
  const userData = useRecoilValue(userState);
  const navigation = useNavigation<NavigationProps['navigation']>();
  useEffect(() => {
    async function getData() {
      const data = await getAsyncData('recordData');
      if (data) {
        setList(JSON.stringify(data));
      }
    }
    getData();
  }, [recordRefresh.refresh]);
  const [noteData, setNoteData] = useState(NOTE__DATA);
  const [isVisible, setVisible] = useState(false);
  const [machineIdx, setIdx] = useState(-1);
  useEffect(() => {
    setNoteAPI({ machineIdx: route.params.machineIdx || 0, accessToken: userData.accessToken, setNote: setNoteData });
  }, [route.params.machineIdx, userData.accessToken]);
  return (
    <PageStyled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerStyled>
          <NoteHeaderContainer
            title={route.params.machineName}
            goBack={() => {
              navigation.goBack();
            }}
            isInput={false}
          />
          <Note isGeneral={false} {...noteData} isRecord={true} />
          <Blank height={getHeightPixel(30)} />
          <RecordContainer
            setIdx={setIdx}
            setVisible={setVisible}
            type={0}
            setList={setList}
            recordList={recordList}
            idx={getIdxFromRecord({ machineIdx: route.params.machineIdx, list: JSON.parse(recordList) })}
            imageUrl={route.params.url}
            name={route.params.machineName}
            machineIdx={route.params.machineIdx}
          />
          <Blank height={getHeightPixel(30)} />
          {/* <RecordArrowContainer /> */}
          <Blank height={getHeightPixel(30)} />
        </ContainerStyled>
      </ScrollView>
    </PageStyled>
  );
}

const PageStyled = styled.View`
  align-items: center;
`;

const ContainerStyled = styled.View`
  align-items: center;
`;
