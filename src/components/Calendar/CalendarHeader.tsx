import React, { Dispatch, SetStateAction, useRef, useState } from 'react';

import styled from 'styled-components/native';
import HeadText from '../Text/HeadText';
import { format } from 'date-fns';
import { MONTH } from '../../constants';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import Reverse_Triangle_Icon from '../../assets/icons/button/reverse_triangle.svg';
import { View } from 'react-native';
import MonthModal from '../Modal/MonthModal';
import BodyText from '../Text/BodyText';

function CalendarHeader({
  date,
  setDate,
  short,
  setShort,
}: {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  short: boolean;
  setShort: Dispatch<SetStateAction<boolean>>;
}) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [location, setLocation] = useState<number[]>([0, 0]);
  const ViewRef = useRef<View>(null);
  return (
    <HeaderStyled>
      <RowStyled
        ref={ViewRef}
        onLayout={() => {
          ViewRef.current?.measure((x, y, width, height, pageX, pageY) => {
            setLocation([pageX, pageY]);
          });
        }}
      >
        <MonthStyled onPress={() => setVisible(true)}>
          <HeadText fontNumber={2}>{MONTH[parseInt(format(date, 'M'), 10) - 1]}</HeadText>
          <ButtonStyled />
        </MonthStyled>
        <ShortStyled onPress={() => setShort(!short)}>
          <BodyText fontNumber={5}>월별보기</BodyText>
        </ShortStyled>
      </RowStyled>
      {isVisible ? (
        <MonthModal location={location} isVisible={isVisible} setVisible={setVisible} setFunc={setDate} />
      ) : null}
    </HeaderStyled>
  );
}

export default CalendarHeader;

const RowStyled = styled.View`
  flex-direction: row;
  width: 100%;
`;

const ShortStyled = styled.TouchableOpacity`
  width: ${getWidthPixel(78)};
  height: ${getHeightPixel(30)};
  position: absolute;
  right: ${getWidthPixel(-30)};
  margin-top: ${getHeightPixel(5)};
`;

const MonthStyled = styled.TouchableOpacity`
  flex-direction: row;
`;

const ButtonStyled = styled(Reverse_Triangle_Icon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

const HeaderStyled = styled.View`
  flex-direction: row;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixel(40)};
`;
