import React, { Dispatch } from 'react';
import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ContainerStyle } from '../../constants/types';

import Card from '../Card';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import { SetStateAction } from 'react';

function MainCardListContainer({
  memoList,
  selectedIdx,
  setSelectedIdx,
}: {
  memoList: any[];
  selectedIdx: number;
  setSelectedIdx: Dispatch<SetStateAction<number>>;
}) {
  return (
    <ContainerStyled height={getWidthPixel(150)}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {memoList.map((memo, idx) => {
          return (
            <Card
              key={memo.machineDto.machineIdx}
              krMachineName={memo.machineDto.krMachineName}
              engMachineName={memo.machineDto.engMachineName}
              isSelected={idx === selectedIdx}
              machineIdx={memo.machineDto.machineIdx}
              imageUrl1={memo.machineDto.imageUrl1}
              userFavoriteIdx={memo.machineDto.userFavoriteIdx}
              targetArea={memo.machineDto.targetArea}
              marginLeft={getWidthPixel(5)}
              marginRight={getWidthPixel(5)}
              backgroundColor={palette.gray_07}
              onPress={() => setSelectedIdx(idx)}
            />
          );
        })}
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
