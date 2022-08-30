import React from 'react';
import styled from 'styled-components/native';

import { getWidthPixel } from '../../utils/responsive';

import Favorite_Selected_Icon from '../../assets/icons/icon/favorite_selected.svg';
import Favorite_White_Icon from '../../assets/icons/icon/favorite_white.svg';
import Favorite_Icon from '../../assets/icons/icon/favorite.svg';

import { ButtonProps } from '../../constants/types';

const FavoriteButton = ({ ...rest }: ButtonProps) => {
  return (
    <ImageStyled>
      {rest.isSelected ? (
        <Favorite_Selected_Icon />
      ) : rest.buttonColor === 'gray' ? (
        <Favorite_Icon />
      ) : (
        <Favorite_White_Icon />
      )}
    </ImageStyled>
  );
};

const ImageStyled = styled.View`
  width: ${getWidthPixel(25)};
  height: ${getWidthPixel(25)};
`;

export default FavoriteButton;
