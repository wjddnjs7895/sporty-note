import React from 'react';
import styled from 'styled-components/native';
import NoteCardContainer from '../components/Container/NoteCardContainer';

import NoteListHeaderContainer from '../components/Container/NoteListHeaderContainer';
import { NavigationParam } from '../constants/navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const NoteListScreen = ({ navigation, route }: NativeStackScreenProps<NavigationParam, 'NoteListScreen'>) => {
  return (
    <ScreenStyled>
      <NoteListHeaderContainer />
      <NoteCardContainer navigation={navigation} route={route} />
    </ScreenStyled>
  );
};

const ScreenStyled = styled.View`
  width: 100%;
`;

export default NoteListScreen;
