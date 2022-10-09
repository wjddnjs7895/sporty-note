import React from 'react';
import { Platform, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import styled, { css } from 'styled-components/native';
import { MONTH } from '../../constants';
import { palette } from '../../constants/palette';
import { ModalProps, ModalStyle } from '../../constants/types';

import { getWidthPixel, getHeightPixel, getPixelToNumber } from '../../utils/responsive';
import BodyText from '../Text/BodyText';

function MonthModal({ location, isVisible, setVisible, setFunc }: ModalProps<Date>) {
  const date = new Date();
  return (
    <>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => {
          if (setVisible !== undefined) {
            setVisible(false);
          }
        }}
        backdropOpacity={0}
        animationInTiming={1}
        animationOutTiming={1}
      >
        <ContainerStyled location={location}>
          <ScrollView>
            {MONTH.map((month, index) => {
              return (
                <View key={month}>
                  <InnerButtonStyled
                    onPress={() => {
                      date.setMonth(index);
                      if (setFunc && setVisible) {
                        setFunc(date);
                        setVisible(false);
                      }
                    }}
                  >
                    <BodyText fontNumber={4}>{month}</BodyText>
                  </InnerButtonStyled>
                  {month !== 'December' ? <DividerStyled /> : null}
                </View>
              );
            })}
          </ScrollView>
        </ContainerStyled>
      </Modal>
    </>
  );
}

const ContainerStyled = styled.View<ModalStyle>`
  position: absolute;
  ${({ location = [0, 0] }) =>
    css`
      left: ${(location[0] - getPixelToNumber(20)).toString() + 'px'};
      top: ${(location[1] + getPixelToNumber(10)).toString() + 'px'};
    `};
  align-items: center;
  width: ${getWidthPixel(105)};
  height: ${getHeightPixel(200)};
  background-color: white;
  border-radius: ${getWidthPixel(5)};
  ${Platform.select({
    ios: css`
      shadow-color: '#000000'; 
      shadow-offset: {width: 1, height: 1};
      shadow-opacity: 0.25;
      shadow-radius:10;
    `,
    android: css`
      elevation: 10;
    `,
  })}
`;

const InnerButtonStyled = styled.TouchableOpacity`
  height: ${getHeightPixel(40)};
  justify-content: center;
  align-items: center;
`;

const DividerStyled = styled.View`
  border-bottom-color: ${palette.gray_06};
  border-bottom-width: 1px;
  width: ${getWidthPixel(100)};
`;

export default MonthModal;
