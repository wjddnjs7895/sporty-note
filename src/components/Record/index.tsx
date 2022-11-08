import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';

import CheckOnIcon from '../../assets/icons/check/check_on.svg';
import CheckOffIcon from '../../assets/icons/check/check_off.svg';
import { SubHeadTextInfo } from '../../constants/font';
import { getModifyRecordSet, storeData } from '../../utils';
import { deleteRecordAPI, postRecordAPI } from '../../utils/api/record';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms/userAtom';

export default function Record({
  set,
  weight,
  count,
  complete,
  recordList,
  machineIdx,
}: {
  set: number;
  weight: number;
  count: number;
  complete: boolean;
  recordList: any[];
  machineIdx: number;
}) {
  const [weightValue, setWeight] = useState(weight);
  const [countValue, setCount] = useState(count);
  const [completeValue, setComplete] = useState(complete);
  const userData = useRecoilValue(userState);
  useEffect(() => {
    storeData(
      'recordData',
      JSON.stringify(
        getModifyRecordSet({
          list: recordList,
          machineIdx: machineIdx,
          count: countValue,
          kg: weightValue,
          complete: completeValue,
          set: set,
        })
      )
    );
  }, [completeValue, countValue, machineIdx, recordList, set, weightValue]);
  return (
    <ContainerStyled>
      <SetContainerStyled>
        <SubHeadText fontNumber={5}>{set}</SubHeadText>
      </SetContainerStyled>
      <WeightContainerStyled>
        <TextInputStyled
          onChangeText={text => {
            setWeight(parseInt(text, 10));
          }}
          defaultValue={weight.toString()}
          keyboardType={'numeric'}
        />
      </WeightContainerStyled>
      <CountContainerStyled>
        <TextInputStyled
          onChangeText={text => {
            setCount(parseInt(text, 10));
          }}
          defaultValue={count.toString()}
          keyboardType={'numeric'}
        />
      </CountContainerStyled>
      <CompleteContainerStyled
        onPress={() => {
          if (completeValue === true) {
            deleteRecordAPI({
              complete: false,
              count: countValue,
              kg: weightValue,
              machineIdx: machineIdx,
              sett: set,
              accessToken: userData.accessToken,
            });
          } else {
            postRecordAPI({
              complete: false,
              count: countValue,
              kg: weightValue,
              machineIdx: machineIdx,
              sett: set,
              accessToken: userData.accessToken,
            });
          }
          setComplete(!completeValue);
        }}
      >
        {completeValue ? <CheckOnIconStyled /> : <CheckOffIconStyled />}
      </CompleteContainerStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  flex-direction: row;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixel(36)};
  align-items: center;
  margin-left: ${getWidthPixel(90)};
`;

const CheckOnIconStyled = styled(CheckOnIcon)`
  width: ${getWidthPixel(25)};
  height: ${getWidthPixel(25)};
  margin-left: ${getWidthPixel(5)};
`;

const CheckOffIconStyled = styled(CheckOffIcon)`
  width: ${getWidthPixel(25)};
  height: ${getWidthPixel(25)};
`;

const SetContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(-20)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;

const WeightContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(65)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;

const CountContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(150)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;

const CompleteContainerStyled = styled.TouchableOpacity`
  position: absolute;
  left: ${getWidthPixel(240)};
  width: ${getWidthPixel(50)};
  justify-content: center;
  align-items: center;
`;

const TextInputStyled = styled.TextInput`
  font-family: ${SubHeadTextInfo[5].fontFamily};
  font-size: ${getPixelToPixel(SubHeadTextInfo[5].fontSize)}
  color: black;
`;
