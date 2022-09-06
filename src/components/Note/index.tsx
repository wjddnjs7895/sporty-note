import React from 'react';
import styled, { css } from 'styled-components/native';

import MemoList from './MemoList';
import { getWidthPixel } from '../../utils/responsive';

import { WORKOUT__INFO } from '../../constants/workout';
import { ImageStyle, NoteDataProps } from '../../constants/types';
import Loading from '../Loading';
import { Loadable } from 'recoil';

const Note = ({ ...note }: Loadable<NoteDataProps>) => {
  switch (note.state) {
    case 'hasValue':
      return (
        <ContainerStyled>
          <ImageStyled source={WORKOUT__INFO[note.contents.machineDto.machineIdx].url} />
          <MemoList {...note.contents.nodeDtos} />
        </ContainerStyled>
      );
    case 'loading':
      return <Loading />;
    case 'hasError':
      throw note.contents;
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
