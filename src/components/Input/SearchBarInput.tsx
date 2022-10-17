import React from 'react';
import styled from 'styled-components/native';

import { InputProps } from '../../constants/types';

import Search_Icon from '../../assets/icons/icon/search.svg';
import Record_Icon from '../../assets/icons/button/record.svg';

import { getPixelToPixel, getWidthPixel, getHeightPixelByWidth } from '../../utils/responsive';

const SearchBarInput = ({ keyword, onChangeText, ...rest }: InputProps) => {
  return (
    <ContainerStyled>
      <ImageStyled />
      <SearchBarStyled
        {...rest}
        onChangeText={text => onChangeText(text)}
        placeholder={rest.placeHolder}
        placeholderTextColor={'#6C7072'}
        value={keyword}
        clearTextOnFocus={true}
      />
      {/* <RecordImageStyled /> */}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`
  width: ${getWidthPixel(358)};
  align-items: center;
  flex-direction: row;
  background-color: #f2f3f8;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixelByWidth(358, 39)};
  border-radius: ${getPixelToPixel(8)};
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

const SearchBarStyled = styled.TextInput`
  font-size: ${getPixelToPixel(17)};
  font-family: Pretendard-Regular;
  align-items: center;
  justify-content: center;
  width: ${getWidthPixel(381)};
  height: ${getHeightPixelByWidth(358, 39)};
`;

export default SearchBarInput;
