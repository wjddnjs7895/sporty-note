import React from 'react';
import styled from 'styled-components/native';

import { ButtonProps } from '../../constants/types';

import Search_Icon from '../../assets/icons/icon/search.svg';
import Record_Icon from '../../assets/icons/button/record.svg';

import { getPixelToPixel, getWidthPixel, getHeightPixelByWidth } from '../../utils/responsive';

const SearchBarButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <ContainerStyled>
      <SearchBarStyled {...rest}>
        <ImageStyled />
        <TextStyled>{children}</TextStyled>
        <RecordImageStyled />
      </SearchBarStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`
  width: 100%;
  align-items: center;
`;

const TextStyled = styled.Text`
  color: '#6C7072';
  font-size: ${getPixelToPixel(17)};
  font-family: Pretendard-Regular;
`;

const ImageStyled = styled(Search_Icon)`
  width: ${getPixelToPixel(18)};
  height: ${getPixelToPixel(18)};
  margin-left: ${getPixelToPixel(10)};
  margin-right: ${getPixelToPixel(10)};
`;

const RecordImageStyled = styled(Record_Icon)`
  position: absolute;
  right: ${getPixelToPixel(8)};
  width: ${getPixelToPixel(18)};
  height: ${getPixelToPixel(18)};
`;

const SearchBarStyled = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #f2f3f8;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixelByWidth(358, 39)};
  border-radius: ${getPixelToPixel(8)};
`;

export default SearchBarButton;
