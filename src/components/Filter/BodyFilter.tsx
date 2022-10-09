import React, { useState } from 'react';
import styled from 'styled-components/native';

import SubHeadText from '../Text/SubHeadText';

import Show_All_Icon from '../../assets/icons/button/show_all.svg';
import { BODY__LIST } from '../../constants/body';
import { SetBodyProps } from '../../constants/types';
import BodyFilterList from './BodyFilterList';

function BodyFilter({ body, setBody }: SetBodyProps) {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <ButtonStyled onPress={() => setVisible(!visible)}>
        <SubHeadText fontNumber={3}>{BODY__LIST[body].krName}</SubHeadText>
        <Show_All_Icon />
      </ButtonStyled>
      {visible ? <BodyFilterList setVisible={setVisible} visible={visible} body={body} setBody={setBody} /> : null}
    </>
  );
}

const ButtonStyled = styled.TouchableOpacity`
  flex-direction: row;
`;

export default BodyFilter;
