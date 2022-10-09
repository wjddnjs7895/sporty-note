import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Blank from '../components/Blank';
import NoteHeaderContainer from '../components/Container/NoteHeaderContainer';
import Note from '../components/Note';
import { getHeightPixel } from '../utils/responsive';
import { BottomTabNavigationParam } from '../constants/navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AddMemoButton from '../components/Button/AddMemoButton';
import MemoInputModal from '../components/Modal/MemoInputModal';
import NoteSelectBar from '../components/Button/NoteSelectBar';
import { useRecoilValue } from 'recoil';
import { getGeneralNoteSelector, getNoteSelector } from '../store/selectors/noteSelector';
import { userState } from '../store/atoms/userAtom';

const NoteScreen = ({ navigation, route }: NativeStackScreenProps<BottomTabNavigationParam, 'NoteScreen'>) => {
  const [screenIdx, setIdx] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const userData = useRecoilValue(userState);
  const generalNoteData = useRecoilValue(
    getGeneralNoteSelector({ machineIdx: route.params.machineIdx || 0, accessToken: userData.accessToken })
  );
  const noteData = useRecoilValue(
    getNoteSelector({ machineIdx: route.params.machineIdx || 0, accessToken: userData.accessToken })
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenStyled>
        <NoteHeaderContainer
          title={noteData.machineDto.krMachineName}
          goBack={() => {
            navigation.goBack();
            navigation.navigate(route.params.goBackKey);
          }}
          isInput={false}
        />
        <NoteSelectBar screenIdx={screenIdx} setIdx={setIdx} />
        <Blank height={getHeightPixel(40)} />
        {screenIdx === 3 ? <Note {...noteData} /> : <Note {...generalNoteData} />}
        {screenIdx === 3 ? (
          <InnerContainerStyled>
            <Blank height={getHeightPixel(30)} />
            <AddMemoButton onPress={() => setVisible(!visible)} />
            <MemoInputModal
              {...noteData}
              machineIdx={noteData.machineDto.machineIdx}
              engMachineName={noteData.machineDto.engMachineName}
              krMachineName={noteData.machineDto.krMachineName}
              setVisible={setVisible}
              isVisible={visible}
              goBack={() => setVisible(false)}
              inputType={0}
            />
          </InnerContainerStyled>
        ) : null}
        <Blank height={getHeightPixel(45)} />
      </ScreenStyled>
    </ScrollView>
  );
};

const ScreenStyled = styled.View`
  align-items: center;
  width: 100%;
`;

const InnerContainerStyled = styled.View`
  align-items: center;
`;

export default NoteScreen;
