import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { BodyKeyTypes } from '../../constants/body';
import { MemoData } from '../../constants/types';

import { getMemoTitle } from '../../utils';
import { getHeightPixelByWidth, getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import Memo from './Memo';

function MemoList({ isGeneral, memoList }: { isGeneral: boolean; memoList: { [key: BodyKeyTypes]: MemoData[] } }) {
  const MemoBodyList = getMemoTitle(memoList);
  return (
    <ContainerStyled>
      {MemoBodyList.map((memoTitle, index) => (
        <View key={memoTitle.body}>
          <Memo memo={memoList[memoTitle.index]} isGeneral={isGeneral} />
          {index + 1 !== MemoBodyList.length ? (
            <InnerContainerStyled>
              <DividerStyled />
            </InnerContainerStyled>
          ) : null}
        </View>
      ))}
    </ContainerStyled>
  );
}

const DividerStyled = styled.View`
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
  margin-top: ${getHeightPixel(15)};
  margin-bottom: ${getHeightPixel(15)};
  width: ${getWidthPixel(322)};
`;

const InnerContainerStyled = styled.View`
  align-items: center;
`;

const ContainerStyled = styled.View`
  width: ${getWidthPixel(358)};
  padding-top: ${getHeightPixelByWidth(27, 15)};
  padding-bottom: ${getHeightPixelByWidth(27, 15)};
  margin-top: ${getHeightPixel(25)};
  background-color: white;
  border-radius: ${getPixelToPixel(10)};
`;

export default MemoList;
