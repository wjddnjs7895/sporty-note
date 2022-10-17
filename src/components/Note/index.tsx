import React from 'react';
import styled, { css } from 'styled-components/native';

import MemoList from './MemoList';
import { getWidthPixel } from '../../utils/responsive';

import { ImageStyle, NoteData } from '../../constants/types';
import { RESOURCE_PREFIX } from '../../constants';

const Note = ({ isGeneral, ...note }: NoteData) => {
  return (
    <ContainerStyled>
      <ImageStyled source={{ uri: RESOURCE_PREFIX + note.machineDto.imageUrl1 }} />
      <MemoList isGeneral={isGeneral || false} memoList={note.nodeDtos} />
    </ContainerStyled>
  );
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
