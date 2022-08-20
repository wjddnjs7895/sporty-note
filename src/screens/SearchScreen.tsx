import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

import SearchBarContainer from '../components/Container/SearchBarContainer';
import SearchCardContainer from '../components/Container/SearchCardContainer';

import { palette } from '../constants/palette';

const SearchScreen = () => {
  return (
    <ContainerStyled showsVerticalScrollIndicator={false}>
      <SearchBarContainer />
      <SearchCardContainer />
    </ContainerStyled>
  );
};

const ContainerStyled = styled(ScrollView)`
  background-color: ${palette.white};
`;

export default SearchScreen;
