import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Blank from '../components/Blank';
import NoteHeaderContainer from '../components/Container/NoteHeaderContainer';
import Note from '../components/Note';
import RoundNoteContainer from '../components/Container/RoundNoteContainer';
import { getHeightPixel } from '../utils/responsive';
import { NavigationParam } from '../constants/navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AddMemoButton from '../components/Button/AddMemoButton';
import MemoInputModal from '../components/Modal/MemoInputModal';
import NoteSelectBar from '../components/Button/NoteSelectBar';

const NoteScreen = ({ navigation, route }: NativeStackScreenProps<NavigationParam, 'NoteScreen'>) => {
  const [screenIdx, setIdx] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenStyled>
        <NoteHeaderContainer goBack={() => navigation.goBack()} isInput={false} />
        <NoteSelectBar screenIdx={screenIdx} setIdx={setIdx} />
        <Blank height={getHeightPixel(40)} />
        <Note
          workoutName="벤치프레스"
          userIdx={'12312312'}
          machineIdx={route.params.machineIdx}
          krMachineName="벤치프레스"
          engMachineName="bench press"
        />
        {screenIdx === 3 ? (
          <InnerContainerStyled>
            <Blank height={getHeightPixel(30)} />
            <AddMemoButton onPress={() => setVisible(!visible)} />
            <MemoInputModal isVisible={visible} goBack={() => setVisible(false)} />
          </InnerContainerStyled>
        ) : null}
        <Blank height={getHeightPixel(45)} />
        <RoundNoteContainer />
        <Blank height={getHeightPixel(30)} />
      </ScreenStyled>
    </ScrollView>
  );
};

const ScreenStyled = styled.View`
  align-items: center;
`;

const InnerContainerStyled = styled.View`
  align-items: center;
`;

export default NoteScreen;
