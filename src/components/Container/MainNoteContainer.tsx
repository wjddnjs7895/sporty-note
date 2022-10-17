/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import SelectBar from '../Button/SelectBar';
import MainCardListContainer from './MainCardListContainer';
import MemoList from '../Note/MemoList';
import Blank from '../Blank';
import { getHeightPixel } from '../../utils/responsive';
import DotIndex from '../Index/DotIndex';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getGeneralNoteSelector } from '../../store/selectors/noteSelector';

import Loading from '../Loading';
import { userState } from '../../store/atoms/userAtom';
import { getGeneralNoteListAPI } from '../../utils/api/note';

function MainNoteContainer() {
  const userData = useRecoilValue(userState);
  const [selectedIdx, setSelectedIdx] = useState(0);
  // const memoAllIdxArr = [2, 3, 7, 10, 11, 14, 19, 21, 35, 36, 38, 44, 45, 61, 67, 77, 78, 80, 89, 98];
  const memoIdxArr = [2, 3, 7, 10, 11, 14, 19, 21, 35, 36];
  const memoData = useRecoilValueLoadable(getGeneralNoteSelector({ machineIdx: 2, accessToken: userData.accessToken }));
  const [memoList, setList] = useState<any[]>([]);
  useEffect(() => {
    getGeneralNoteListAPI({
      accessToken: userData.accessToken,
      idxList: memoIdxArr,
      setList: setList,
    });
  }, []);
  switch (memoData.state) {
    case 'hasValue':
      return (
        <ContainerStyled>
          <HeaderStyled>
            <SelectBar isSelected={true}>운동정보</SelectBar>
            <SelectBar>나만의 운동</SelectBar>
          </HeaderStyled>
          <Blank height={'25px'} />
          <MainCardListContainer memoList={memoList} setSelectedIdx={setSelectedIdx} selectedIdx={selectedIdx} />
          <DotIndex length={memoList.length} selectedIdx={selectedIdx} />
          {memoList[selectedIdx] !== undefined ? <MemoList {...memoList[selectedIdx].nodeDtos} /> : null}
        </ContainerStyled>
      );
    case 'loading':
      return <Loading />;
    case 'hasError':
      throw memoData.contents;
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
