import React from 'react';
import styled from 'styled-components/native';

import SelectBar from '../Button/SelectBar';
import MainCardListContainer from './MainCardListContainer';
import MemoList from '../Note/MemoList';
import Blank from '../Blank';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';
import DotIndex from '../Index/DotIndex';
import { useRecoilValueLoadable } from 'recoil';
import { getNoteSelector } from '../../store/selectors/noteSelector';

import { WORKOUT__INFO } from '../../constants/workout';
import Loading from '../Loading';

function MainNoteContainer() {
  const memoList = useRecoilValueLoadable(
    getNoteSelector({ userIdx: '12312312', machineIdx: WORKOUT__INFO.벤치프레스.index })
  );
  switch (memoList.state) {
    case 'hasValue':
      return (
        <ContainerStyled>
          <HeaderStyled>
            <SelectBar isSelected={true}>운동정도</SelectBar>
            <SelectBar>내 근처 운동</SelectBar>
          </HeaderStyled>
          <Blank height={'25px'} />
          <MainCardListContainer height={getWidthPixel(150)} />
          <DotIndex />
          <MemoList {...memoList.contents.nodeDtos} />
        </ContainerStyled>
      );
    case 'loading':
      return <Loading />;
    case 'hasError':
      throw memoList.contents;
  }
}

const HeaderStyled = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${getHeightPixel(30)};
`;

const ContainerStyled = styled.View`
  align-items: center;
`;

export default MainNoteContainer;
