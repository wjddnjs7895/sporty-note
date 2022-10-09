import React from 'react';
import styled from 'styled-components/native';
import NoteCardContainer from '../components/Container/NoteCardContainer';

import NoteListHeaderContainer from '../components/Container/NoteListHeaderContainer';
import { NavigationProps } from '../constants/navigator';

const NoteListScreen = ({ navigation, route }: NavigationProps) => {
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
