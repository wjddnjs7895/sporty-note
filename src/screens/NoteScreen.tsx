import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Blank from '../components/Blank';
import NoteHeaderContainer from '../components/Container/NoteHeaderContainer';
import Note from '../components/Note';
import { getHeightPixel } from '../utils/responsive';
import { NavigationParam } from '../constants/navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AddMemoButton from '../components/Button/AddMemoButton';
import MemoInputModal from '../components/Modal/MemoInputModal';
import NoteSelectBar from '../components/Button/NoteSelectBar';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getNoteSelector } from '../store/selectors/noteSelector';
import { userState } from '../store/atoms/userAtom';

const NoteScreen = ({ navigation, route }: NativeStackScreenProps<NavigationParam, 'NoteScreen'>) => {
  const [screenIdx, setIdx] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const userData = useRecoilValue(userState);
  const noteData = useRecoilValueLoadable(
    getNoteSelector({ userIdx: userData.userIdx, machineIdx: route.params.machineIdx })
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenStyled>
        <NoteHeaderContainer goBack={() => navigation.goBack()} isInput={false} />
        <NoteSelectBar screenIdx={screenIdx} setIdx={setIdx} />
        <Blank height={getHeightPixel(40)} />
        <Note {...noteData} />
        {screenIdx === 3 ? (
          <InnerContainerStyled>
            <Blank height={getHeightPixel(30)} />
            <AddMemoButton onPress={() => setVisible(!visible)} />
            <MemoInputModal {...noteData.contents} isVisible={visible} goBack={() => setVisible(false)} />
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
