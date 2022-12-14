/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

import WordFilter from '../Filter/WordFilter';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import HeadText from '../Text/HeadText';
import SearchBarInput from '../Input/SearchBarInput';

function SearchBarContainer({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}) {
  return (
    <ContainerStyled>
      <SearchBarInput keyword={keyword} onChangeText={setKeyword} placeHolder={'운동을 검색해보세요'} />
      <Blank height={getHeightPixel(15)} />
      {/* <Blank height={getHeightPixel(25)} />
      <TitleStyled>최근 검색어</TitleStyled>
      <InnerContainerStyled>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Blank width={getWidthPixel(13)} />
          <WordFilter text={'맨몸운동'} />
          <WordFilter text={'벤치'} />
          <WordFilter text={'프리웨이트'} />
          <WordFilter text={'프리웨이트'} />
          <WordFilter text={'프리웨이트'} />
          <Blank width={getWidthPixel(13)} />
        </ScrollView>
      </InnerContainerStyled>
      <Blank height={getHeightPixel(45)} />
      <TitleStyled>추천 검색어</TitleStyled>
      <InnerContainerStyled>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Blank width={getWidthPixel(13)} />
          <WordFilter text={'가슴'} buttonColor={'lime_01'} hasBorder={false} />
          <WordFilter text={'등'} buttonColor={'lime_01'} hasBorder={false} />
          <WordFilter text={'허리'} buttonColor={'lime_01'} hasBorder={false} />
          <WordFilter text={'팔꿈치'} buttonColor={'lime_01'} hasBorder={false} />
          <WordFilter text={'어깨'} buttonColor={'lime_01'} hasBorder={false} />
          <Blank width={getWidthPixel(13)} />
        </ScrollView>
      </InnerContainerStyled>
      <Blank height={getHeightPixel(25)} /> */}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  margin-top: ${getHeightPixel(16)};
  align-items: center;
`;

const InnerContainerStyled = styled.View`
  flex-direction: row;
`;

const TitleStyled = styled(HeadText)`
  margin-left: ${getWidthPixel(25)};
  margin-bottom: ${getHeightPixel(15)};
  width: 100%;
`;

export default SearchBarContainer;
