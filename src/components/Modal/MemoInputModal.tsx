import React, { useState } from 'react';

import { Modal, ScrollView, TextInput } from 'react-native';
import styled from 'styled-components/native';

import NoteHeaderContainer from '../Container/NoteHeaderContainer';
import { NoteModalProps } from '../../constants/types';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import ColorTag from '../Note/ColorTag';
import BodyFilter from '../Filter/BodyFilter';
import Blank from '../Blank';
import { BodyKeyTypes } from '../../constants/body';
import { HeadTextInfo } from '../../constants/font';
import { postMemoSelector } from '../../store/selectors/noteSelector';
import { useRecoilState } from 'recoil';

function MemoInputModal({ goBack, isVisible }: NoteModalProps) {
  const [body, setBody] = useState<BodyKeyTypes>('CHEST');
  const [memoTitle, setTitle] = useState<string>('');
  const [memoText, setText] = useState<string>('');
  return (
    <>
      <Modal visible={isVisible} animationType={'slide'}>
        <ScrollView>
          <ContainerStyled>
            <NoteHeaderContainer goBack={goBack} isInput={true} submit={postMemoSelector({ color: 'black', machineIdx: 1, noteIdx: 1, pictureUrl: 'string', text: memoText, type: {engName: 'string', krName: 'string'}, userIdx: '12312312', x_location: 0, y_location: 0 })} />
            <HeaderContainerStyled>
              <InputStyled>
                <LineStyled />
                <TitleInputStyled
                  placeholder="Title"
                  placeholderTextColor={palette.gray_03}
                  onChangeText={title => setTitle(title)}
                />
              </InputStyled>
              <InnerContainerStyled>
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

const InputStyled = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TitleInputStyled = styled.TextInput`
  font-family: ${HeadTextInfo[2].fontFamily};
  font-size: ${getPixelToPixel(HeadTextInfo[2].fontSize)}
  color: black;
  width: ${getWidthPixel(200)}; 
`;

const TextInputStyled = styled.TextInput`
  font-size: ${getPixelToPixel(14)};
  font-family: 'Pretendard-Regular';
  color: black;
  width: ${getWidthPixel(342)};
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
  position: absolute;
  height: 100%;
  right: ${getWidthPixel(20)};
  flex-direction: row;
  align-items: center;
`;

export default MemoInputModal;
