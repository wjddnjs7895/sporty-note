import React from 'react';
import styled from 'styled-components/native';

import SelectBar from '../Button/SelectBar';
import MainCardListContainer from './MainCardListContainer';
import MemoList from '../Note/MemoList';
import Blank from '../Blank';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';
import DotIndex from '../Index/DotIndex';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { getGeneralNoteSelector } from '../../store/selectors/noteSelector';

import Loading from '../Loading';
import { userState } from '../../store/atoms/userAtom';

function MainNoteContainer() {
  const userData = useRecoilValue(userState);
  const memoList = useRecoilValueLoadable(getGeneralNoteSelector({ machineIdx: 0, accessToken: userData.accessToken }));
  switch (memoList.state) {
    case 'hasValue':
      return (
        <ContainerStyled>
          <HeaderStyled>
            <SelectBar isSelected={true}>운동정보</SelectBar>
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
  flex-direction: row;ㅡㅜㅜ
  align-items: center;
  margin-top: ${getHeightPixel(30)};
`;

const ContainerStyled = styled.View`
  align-items: center;
`;

export default MainNoteContainer;
