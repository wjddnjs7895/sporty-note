import React from 'react';
import styled from 'styled-components/native';

import Card from '../Card';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

function SearchCardContainer() {
  return (
    <ListStyled>
      <Card
        workoutName="벤치프레스"
        width={getWidthPixel(170)}
        height={getWidthPixel(170)}
        marginTop={getHeightPixel(9)}
        marginBottom={getHeightPixel(9)}
      />
      <Card
        workoutName="딥스"
        width={getWidthPixel(170)}
        height={getWidthPixel(170)}
        marginTop={getHeightPixel(9)}
        marginBottom={getHeightPixel(9)}
      />
      <Card
        workoutName="딥스"
        width={getWidthPixel(170)}
        height={getWidthPixel(170)}
        marginTop={getHeightPixel(9)}
        marginBottom={getHeightPixel(9)}
      />
      <Card
        workoutName="벤치프레스"
        width={getWidthPixel(170)}
        height={getWidthPixel(170)}
        marginTop={getHeightPixel(9)}
        marginBottom={getHeightPixel(9)}
      />
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
