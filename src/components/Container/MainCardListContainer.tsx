import React from 'react';
import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ContainerProps, ContainerStyle } from '../../constants/types';

import Card from '../Card';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

function MainCardListContainer({ ...rest }: ContainerProps) {
  return (
    <ContainerStyled height={rest.height}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card
          krMachineName="벤치프레스"
          engMachineName="benchpress"
          isSelected={false}
          machineIdx={1}
          url="url"
          userFavoriteIdx={0}
          targetArea="CHEST"
          marginLeft={getWidthPixel(5)}
          marginRight={getWidthPixel(5)}
        />
      </ScrollView>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View<ContainerStyle>`
  margin-bottom: ${getHeightPixel(18)};
  ${({ height = getWidthPixel(150) }) => css`
    height: ${height};
  `}
`;

export default MainCardListContainer;
