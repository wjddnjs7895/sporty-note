import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import BodyText from '../Text/BodyText';

import { palette } from '../../constants/palette';
import Text_Icon from '../../assets/icons/icon/text.svg';
import { MemoData } from '../../constants/types';
import { View } from 'react-native';
import EditModalButton from '../Button/EditModalButton';

function MemoContent(memoContent: MemoData[]) {
  return (
    <ContainerStyled>
      {Object.values(memoContent).map((memo, index) => (
        <View key={memo.nodeIdx}>
          <InnerContainerStyled>
            <ImageCoverStyled>
              <ImageStyled />
            </ImageCoverStyled>
            <MemoTextStyled>{memo.text}</MemoTextStyled>
            <EditModalButton
              nodeIdx={memo.nodeIdx}
              color={memo.color}
              pictureUrl={memo.pictureUrl}
              text={memo.text}
              type={memo.type}
              body={memo.body}
              machineIdx={memo.machineIdx}
            />
          </InnerContainerStyled>
          {index + 1 !== Object.values(memoContent).length ? <DividerStyled /> : null}
        </View>
      ))}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  padding-left: ${getWidthPixel(20)};
`;

const DividerStyled = styled.View`
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
  margin-top: ${getHeightPixel(10)};
  margin-bottom: ${getHeightPixel(10)};
  width: ${getWidthPixel(289)};
`;

const InnerContainerStyled = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MemoTextStyled = styled(BodyText)`
  width: ${getWidthPixel(230)};
  padding-left: ${getWidthPixel(20)};
`;

const ImageCoverStyled = styled.View`
  background-color: ${palette.gray_06};
  border-radius: ${getWidthPixel(5)};
  width: ${getWidthPixel(45)};
  height: ${getWidthPixel(45)};
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled(Text_Icon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

export default MemoContent;
