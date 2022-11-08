import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import { AppleButton } from '@invertase/react-native-apple-authentication';
import { onAppleButtonPress } from '../../utils';

const AppleLoginButton = () => {
  return (
    <AppleButtonStyled
      buttonStyle={AppleButton.Style.WHITE}
      buttonType={AppleButton.Type.SIGN_IN}
      onPress={() => onAppleButtonPress()}
    />
  );
};

const AppleButtonStyled = styled(AppleButton)`
  border-radius: 12px;
  width: ${getWidthPixel(219)};
  height: ${getHeightPixel(50)};
`;

export default AppleLoginButton;
