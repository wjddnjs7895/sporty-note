import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Record from '../Record';
import RecordHeaderColumnContainer from './RecordColumnHeaderContainer';
import RecordHeaderContainer from './RecordHeaderContainer';

import PlusIcon from '../../assets/icons/button/plus_record.svg';
import MinusIcon from '../../assets/icons/button/delete_record.svg';
import Blank from '../Blank';
import { TouchableOpacity, View } from 'react-native';
import { getAddRecordSet, getDeleteRecordSet, storeData } from '../../utils';
import RecordView from '../Record/RecordView';
import { getMachineDataAPI } from '../../utils/api/machine';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms/userAtom';

export default function RecordContainer({
  imageUrl,
  name,
  machineIdx,
  idx,
  recordList,
  setList,
  type,
}: {
  imageUrl?: string;
  name?: string;
  machineIdx: number;
  idx: number;
  recordList: string;
  setList: Dispatch<SetStateAction<string>>;
  type: number;
}) {
  const userData = useRecoilValue(userState);
  const [workoutData, setData] = useState<{ name: string; imageUrl: string }>({ name: '', imageUrl: '' });
  useEffect(() => {
    if (type === 1) {
      getMachineDataAPI({ machineIdx: machineIdx, accessToken: userData.accessToken, setData: setData });
    }
  }, [machineIdx, type, userData.accessToken]);
  return (
    <ContainerStyled>
      <RecordHeaderContainer
        imageUrl={type === 0 ? imageUrl || '' : workoutData.imageUrl}
        name={type === 0 ? name || '' : workoutData.name}
      />
      <RecordHeaderColumnContainer />
      {JSON.parse(recordList)[idx].kg.map((weight: number, index: number) => {
        return (
          <View key={'record' + index.toString()}>
            {type === 0 ? (
              <Record
                machineIdx={machineIdx}
                recordList={JSON.parse(recordList)}
                set={index + 1}
                weight={weight}
                count={JSON.parse(recordList)[idx].count[index]}
                complete={JSON.parse(recordList)[idx].complete[index]}
              />
            ) : (
              <RecordView
                set={index + 1}
                weight={weight}
                count={JSON.parse(recordList)[idx].count[index]}
                completeValue={JSON.parse(recordList)[idx].complete[index]}
              />
            )}
          </View>
        );
      })}
      <DividerStyled />
      <Blank height={getHeightPixel(10)} />
      <ButtonContainerStyled>
        <TouchableOpacity
          onPress={() => {
            const resultList = getAddRecordSet({ list: JSON.parse(recordList), machineIdx: machineIdx });
            setList(JSON.stringify(resultList));
            async function store() {
              await storeData('recordData', JSON.stringify(resultList));
            }
            store();
          }}
        >
          <PlusIconStyled />
        </TouchableOpacity>
        <Blank width={getWidthPixel(36)} />
        <TouchableOpacity
          onPress={() => {
            if (JSON.parse(recordList) && JSON.parse(recordList)[idx].kg.length !== 0) {
              setList(JSON.stringify(getDeleteRecordSet({ list: JSON.parse(recordList), machineIdx: machineIdx })));
            }
            async function store() {
              await storeData(
                'recordData',
                JSON.stringify(getDeleteRecordSet({ list: JSON.parse(recordList), machineIdx: machineIdx }))
              );
            }
            store();
          }}
        >
          <MinusIconStyled />
        </TouchableOpacity>
      </ButtonContainerStyled>
    </ContainerStyled>
  );
}

const ButtonContainerStyled = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MinusIconStyled = styled(MinusIcon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

const PlusIconStyled = styled(PlusIcon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

const ContainerStyled = styled.View`
  width: ${getWidthPixel(390)};
  border-radius: ${getWidthPixel(10)};
  background-color: white;
  align-items: center;
  padding-top: ${getHeightPixel(20)};
  padding-bottom: ${getHeightPixel(10)};
`;

const DividerStyled = styled.View`
  width: ${getWidthPixel(350)};
  border-bottom-color: #c9c9c9;
  border-bottom-width: 1px;
  margin-top: ${getHeightPixel(10)};
`;
