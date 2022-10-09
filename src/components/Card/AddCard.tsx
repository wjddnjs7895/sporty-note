import React from 'react';
import styled from 'styled-components/native';

import Card from '.';

import Plus_Icon from '../../assets/icons/button/plus.svg';
import Circle_Check_Icon from '../../assets/icons/check/circle_check.svg';
import { CardProps } from '../../constants/types';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';

function AddCard({ onPress, ...rest }: CardProps) {
  return (
    <Card
      {...rest}
      width={getWidthPixel(170)}
      height={getWidthPixel(200)}
      marginTop={getHeightPixel(9)}
      marginBottom={getHeightPixel(9)}
      onPress={onPress}
      isSelected={rest.isSelected}
    >
      <Blank height={getHeightPixel(10)} />
      {rest.isSelected ? <Check_Icon_Styled /> : <Plus_Icon_Styled />}
    </Card>
  );
}

const Plus_Icon_Styled = styled(Plus_Icon)`
  width: ${getWidthPixel(15)};
  height: ${getWidthPixel(15)};
  margin: ${getWidthPixel(7.5)};
`;

const Check_Icon_Styled = styled(Circle_Check_Icon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

export default AddCard;
