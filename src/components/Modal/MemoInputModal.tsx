import React, { useState } from 'react';

import { Modal, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import NoteHeaderContainer from '../Container/NoteHeaderContainer';
import { NoteModalProps } from '../../constants/types';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import ColorTag from '../Note/ColorTag';
import BodyFilter from '../Filter/BodyFilter';
import Blank from '../Blank';
import { BodyKeyTypes } from '../../constants/body';
import { postMemoSelector } from '../../store/selectors/noteSelector';

function MemoInputModal({ goBack, isVisible, ...note }: NoteModalProps) {
  const [body, setBody] = useState<BodyKeyTypes>('CHEST');
  const [memoText, setText] = useState<string>('');
  return (
    <>
      <Modal visible={isVisible} animationType={'slide'}>
        <ScrollView>
          <ContainerStyled>
            <NoteHeaderContainer
              goBack={goBack}
              isInput={true}
              submit={() => {
                goBack();
                postMemoSelector({
                  color: 'black',
                  machineIdx: note.machineDto.machineIdx,
                  noteIdx: note.noteIdx,
                  pictureUrl: note.machineDto.url,
                  text: memoText,
                  type: { engName: note.machineDto.engMachineName, krName: note.machineDto.krMachineName },
                  userIdx: '12312312',
                  x_location: 0,
                  y_location: 0,
                });
              }}
            />
            <HeaderContainerStyled>
              <InnerContainerStyled>
                <LineStyled />
                <ColorTag tagColor={palette.blue} />
                <Blank width={getWidthPixel(10)} />
                <BodyFilter body={body} setBody={setBody} />
              </InnerContainerStyled>
            </HeaderContainerStyled>
            <DividerStyled />
            <TextInputStyled
              placeholder="오늘의 운동을 노트하세요!"
              placeholderTextColor={palette.gray_03}
              multiline={true}
              onChangeText={text => setText(text)}
            />
          </ContainerStyled>
        </ScrollView>
      </Modal>
    </>
  );
}

const ContainerStyled = styled.View`
  align-items: center;
`;

const TextInputStyled = styled.TextInput`
  font-size: ${getPixelToPixel(14)};
  font-family: 'Pretendard-Regular';
  color: black;
  width: ${getWidthPixel(342)};
  height: ${getHeightPixel(600)};
  text-align-vertical: top;
`;

const HeaderContainerStyled = styled.View`
  height: ${getHeightPixel(70)};
  width: ${getWidthPixel(390)};
  flex-direction: row;
`;

const LineStyled = styled.View`
  width: 0px;
  height: ${getPixelToPixel(24)};
  border: 1px solid ${palette.lime_01};
  margin-right: ${getWidthPixel(7)};
  margin-left: ${getWidthPixel(25)};
`;

const DividerStyled = styled.View`
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
  width: ${getWidthPixel(342)};
`;

const InnerContainerStyled = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
`;

export default MemoInputModal;
