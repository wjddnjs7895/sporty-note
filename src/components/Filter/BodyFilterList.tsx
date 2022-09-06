import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';

import SubHeadText from '../Text/SubHeadText';

import { BODY__LIST } from '../../constants/body';
import { BodyFilterProps } from '../../constants/types';
import { getPixelToPixel, getWidthPixel, getHeightPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';

function BodyFilterList({ setBody, visible, setVisible }: BodyFilterProps) {
  return (
    <>
      <Modal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        backdropOpacity={0}
        animationInTiming={1}
        animationOutTiming={1}
      >
        <ContainerStyled>
          <ScrollView showsVerticalScrollIndicator={false}>
            {Object.keys(BODY__LIST).map((BODY, index) => {
              return (
                <View key={BODY}>
                  <ButtonStyled
                    onPress={() => {
                      setBody(BODY);
                      setVisible(false);
                    }}
                  >
                    <SubHeadText fontNumber={4}>{BODY__LIST[BODY].krName}</SubHeadText>
                  </ButtonStyled>
                  {index !== Object.keys.length ? <DividerStyled /> : null}
                </View>
              );
            })}
          </ScrollView>
        </ContainerStyled>
      </Modal>
    </>
  );
}

const ContainerStyled = styled.View`
  width: ${getWidthPixel(80)};
  height: ${getHeightPixel(200)};
  position: absolute;
  background-color: white;
  border-radius: ${getPixelToPixel(10)};
  border: 1px solid ${palette.gray_06};
  top: ${getHeightPixel(100)};
  left: ${getWidthPixel(10)};
`;

const ButtonStyled = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${getHeightPixel(40)};
`;

const DividerStyled = styled.View`
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
  width: ${getWidthPixel(100)};
`;

export default BodyFilterList;
