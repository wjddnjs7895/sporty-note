import React, { useState } from 'react';

import { KeyboardAvoidingView, Modal, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import NoteHeaderContainer from '../Container/NoteHeaderContainer';
import { MemoInputModalProps } from '../../constants/types';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import ColorTag from '../Note/ColorTag';
import BodyFilter from '../Filter/BodyFilter';
import Blank from '../Blank';
import { BodyKeyTypes, BODY__LIST } from '../../constants/body';
import { modifyMemoSelector } from '../../store/selectors/noteSelector';
import { postMemoAPI } from '../../utils/api';
import { userState } from '../../store/atoms/userAtom';
import { useRecoilValue } from 'recoil';

function MemoInputModal({ goBack, isVisible, ...note }: MemoInputModalProps) {
  const [body, setBody] = useState<BodyKeyTypes>(note.body || 'CHEST');
  const [memoText, setText] = useState<string>('');
  const userData = useRecoilValue(userState);
  return (
    <KeyboardAvoidingView behavior={'position'}>
      <Modal visible={isVisible} animationType={'slide'}>
        <ScrollView>
          <ContainerStyled>
            <NoteHeaderContainer
              title={note.krMachineName}
              goBack={goBack || (() => {})}
              isInput={true}
              submit={() => {
                if (goBack !== undefined) {
                  goBack();
                }
                if (note.inputType === 0) {
                  postMemoAPI({
                    color: BODY__LIST[body].color,
                    machineIdx: note.machineIdx || 0,
                    noteIdx: note.noteIdx,
                    pictureUrl: note.url || '',
                    text: memoText,
                    type: { krName: BODY__LIST[body].krName, engName: BODY__LIST[body].engName },
                    x_location: 0,
                    y_location: 0,
                    accessToken: userData.accessToken,
                  });
                } else {
                  modifyMemoSelector({
                    nodeIdx: note.nodeIdx || 0,
                    type: { krName: BODY__LIST[body].krName, engName: BODY__LIST[body].engName },
                    color: BODY__LIST[body].color,
                    text: memoText,
                    pictureUrl: note.url || '',
                    accessToken: userData.accessToken,
                  });
                }
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
              placeholder={note.text || '오늘의 운동을 노트하세요!'}
              placeholderTextColor={palette.gray_03}
              multiline={true}
              onChangeText={text => setText(text)}
            />
          </ContainerStyled>
        </ScrollView>
      </Modal>
    </KeyboardAvoidingView>
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
  height: ${getHeightPixel(300)};
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
