import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/native';
import { PRIVATE__POLICY__URL, TERMS__URL } from '../../constants';
import { palette } from '../../constants/palette';
import { userState } from '../../store/atoms/userAtom';
import { openLinkingURL } from '../../utils';
import { getLogoutAPI } from '../../utils/api/user';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';

function SettingsContainer() {
  const [userData, setUserData] = useRecoilState(userState);
  return (
    <ContainerStyled>
      <ButtonStyled onPress={() => openLinkingURL(TERMS__URL)}>
        <SubHeadText fontNumber={3}>이용약관</SubHeadText>
      </ButtonStyled>
      <DividerStyled />
      <ButtonStyled onPress={() => openLinkingURL(PRIVATE__POLICY__URL)}>
        <SubHeadText fontNumber={3}>개인정보 처리 방침</SubHeadText>
      </ButtonStyled>
      <DividerStyled />
      <ButtonStyled
        onPress={() => {
          getLogoutAPI({ accessToken: userData.accessToken });
          setUserData({ accessToken: '', success: false });
        }}
      >
        <SubHeadText fontNumber={3}>로그아웃</SubHeadText>
      </ButtonStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: 100%;
  align-items: center;
`;

const DividerStyled = styled.View`
  width: ${getWidthPixel(342)};
  border-bottom-color: ${palette.white};
  border-bottom-width: 1px;
`;

const ButtonStyled = styled.TouchableOpacity`
  width: ${getWidthPixel(342)};
  height: ${getHeightPixel(62)};
  justify-content: center;
`;

export default SettingsContainer;
