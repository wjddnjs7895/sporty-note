import React, { useState } from 'react';
import styled from 'styled-components/native';

import SearchBarContainer from '../components/Container/SearchBarContainer';
import SearchCardContainer from '../components/Container/SearchCardContainer';
import SearchHeaderContainer from '../components/Container/SearchHeaderContainer';

import { palette } from '../constants/palette';
import { getHeightPixel } from '../utils/responsive';

const SearchScreen = () => {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <ContainerStyled>
      <SearchHeaderContainer />
      <SearchBarContainer keyword={keyword} setKeyword={setKeyword} />
      <SearchCardContainer keyword={keyword} />
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`
  height: ${getHeightPixel(830)};
  background-color: ${palette.white};
`;

export default SearchScreen;
