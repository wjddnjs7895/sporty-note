import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import MainHeaderContainer from '../components/Container/MainHeaderContainer';
import MainButtonContainer from '../components/Container/MainButtonContainer';
import MainNoteContainer from '../components/Container/MainNoteContainer';

import { BackgroundStyle } from '../constants/styles';
import { getHeightPixel } from '../utils/responsive';
import { NavigationProps } from '../constants/navigator';

const MainScreen = ({ navigation, route }: NavigationProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenStyled>
        <MainHeaderContainer />
        <MainButtonContainer navigation={navigation} route={route} />
        <MainNoteContainer />
      </ScreenStyled>
    </ScrollView>
  );
};

const ScreenStyled = styled(BackgroundStyle)`
  display: flex;
  align-items: center;
  margin-bottom: ${getHeightPixel(50)};
`;

export default MainScreen;
