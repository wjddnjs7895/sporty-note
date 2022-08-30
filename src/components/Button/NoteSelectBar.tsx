import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import SelectBar from '../Button/SelectBar';
import { NoteSelectBarProps } from '../../constants/types';
import { NOTE__HEADER__TEXT } from '../../constants/text';
import { useRecoilValue } from 'recoil';
import { appState } from '../../store/atoms/appAtom';

function NoteSelectBar({ screenIdx, setIdx }: NoteSelectBarProps) {
  const appInfo = useRecoilValue(appState);
  return (
    <BarStyled>
      <SelectBar fontNumber={3} width={getWidthPixel(89)} isSelected={screenIdx === 0} onPress={() => setIdx(0)}>
        {NOTE__HEADER__TEXT[0][appInfo.language]}
      </SelectBar>
      <SelectBar fontNumber={3} width={getWidthPixel(89)} isSelected={screenIdx === 1} onPress={() => setIdx(1)}>
        {NOTE__HEADER__TEXT[1][appInfo.language]}
      </SelectBar>
      <SelectBar fontNumber={3} width={getWidthPixel(89)} isSelected={screenIdx === 2} onPress={() => setIdx(2)}>
        {NOTE__HEADER__TEXT[2][appInfo.language]}
      </SelectBar>
      <SelectBar fontNumber={3} width={getWidthPixel(89)} isSelected={screenIdx === 3} onPress={() => setIdx(3)}>
        {NOTE__HEADER__TEXT[3][appInfo.language]}
      </SelectBar>
    </BarStyled>
  );
}

const BarStyled = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${getHeightPixel(10)};
`;

export default NoteSelectBar;
