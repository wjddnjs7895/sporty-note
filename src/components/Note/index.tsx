import React from 'react';
import styled, { css } from 'styled-components/native';

import MemoList from './MemoList';
import { getWidthPixel } from '../../utils/responsive';
import { getNoteSelector } from '../../store/selectors/noteSelector';

import { WORKOUT__INFO } from '../../constants/workout';
import { ImageStyle, NoteProps } from '../../constants/types';
import { useRecoilValueLoadable } from 'recoil';
import Loading from '../Loading';

const Note = ({ ...rest }: NoteProps) => {
  const memoList = useRecoilValueLoadable(getNoteSelector({ userIdx: rest.userIdx, machineIdx: rest.machineIdx }));
  switch (memoList.state) {
    case 'hasValue':
      return (
        <ContainerStyled>
          <ImageStyled source={WORKOUT__INFO[rest.workoutName].url} width={rest.width} />
          <MemoList {...memoList.contents.nodeDtos} />
        </ContainerStyled>
      );
    case 'loading':
      return <Loading />;
    case 'hasError':
      throw memoList.contents;
  }
};

const ImageStyled = styled.Image<ImageStyle>`
  resize-mode: contain;
  ${({ width = getWidthPixel(200) }) => css`
    width: ${width};
    height: ${width};
  `}
`;

const ContainerStyled = styled.View`
  width: 100%;
  align-items: center;
`;

export default Note;
