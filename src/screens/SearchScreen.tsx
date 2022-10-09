import React, { useState } from 'react';
import styled from 'styled-components/native';

import SearchBarContainer from '../components/Container/SearchBarContainer';
import SearchCardContainer from '../components/Container/SearchCardContainer';

import { palette } from '../constants/palette';

const SearchScreen = () => {
  const [keyword, setKeyword] = useState<string>('');
  return (
    <ContainerStyled>
      <SearchBarContainer keyword={keyword} setKeyword={setKeyword} />
      <SearchCardContainer keyword={keyword} />
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`
  width: 100%;
  background-color: ${palette.white};
`;

export default SearchScreen;
