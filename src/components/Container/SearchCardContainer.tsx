import React from 'react';
import styled from 'styled-components/native';

import Card from '../Card';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';

function SearchCardContainer() {
  return (
    <ListStyled>
      <Card
        targetArea="CHEST"
        url="url"
        machineIdx={0}
        userFavoriteIdx={0}
        krMachineName="벤치프레스"
        engMachineName="benchpress"
        width={getWidthPixel(170)}
        height={getWidthPixel(170)}
        marginTop={getHeightPixel(9)}
        marginBottom={getHeightPixel(9)}
      />
      <Blank width={getWidthPixel(170)} height={getWidthPixel(170)} />
    </ListStyled>
  );
}

const ListStyled = styled.View`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
`;

export default SearchCardContainer;
