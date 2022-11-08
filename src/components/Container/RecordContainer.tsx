/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Record from '../Record';
import RecordHeaderColumnContainer from './RecordColumnHeaderContainer';
import RecordHeaderContainer from './RecordHeaderContainer';

import PlusIcon from '../../assets/icons/button/plus_record.svg';
import MinusIcon from '../../assets/icons/button/delete_record.svg';
import Blank from '../Blank';
import { TouchableOpacity } from 'react-native';
import { getAddRecordSet, getAsyncData, getDeleteRecordSet, getIdxFromRecord, storeData } from '../../utils';

export default function RecordContainer({
  imageUrl,
  name,
  machineIdx,
}: {
  imageUrl: string;
  name: string;
  machineIdx: number;
}) {
  const [recordList, setList] = useState<
    { machineIdx: number; count: number[]; kg: number[]; complete: boolean[]; length: number }[]
  >([]);
  const [realList, setRealList] = useState<
    { machineIdx: number; count: number[]; kg: number[]; complete: boolean[]; length: number }[]
  >([]);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    async function getData() {
      const data = await getAsyncData('recordData');
      if (data) {
        setList([...data]);
        setIdx(getIdxFromRecord({ machineIdx: machineIdx, list: [...data] }));
      }
    }
    getData();
  }, []);

  useEffect(() => {
    setRealList(recordList);
  }, [recordList]);

  return (
    <ContainerStyled>
      <RecordHeaderContainer imageUrl={imageUrl} name={name} />
      <RecordHeaderColumnContainer />
      {realList[idx]
        ? realList[idx].kg.map((weight: number, index: number) => {
            return (
              <Record
                machineIdx={machineIdx}
                recordList={recordList}
                key={index}
                set={index + 1}
                weight={weight}
                count={recordList[idx].count[index]}
                complete={recordList[idx].complete[index]}
              />
            );
          })
        : null}
      <DividerStyled />
      <Blank height={getHeightPixel(10)} />
      <ButtonContainerStyled>
        <TouchableOpacity
          onPress={() => {
            console.log('recordList: ', [...recordList]);
            const resultList = getAddRecordSet({ list: [...recordList], machineIdx: machineIdx });
            console.log('resultList', resultList);
            setList([...resultList]);
            storeData('recordData', JSON.stringify(resultList));
            console.log('recordList after setList: ', [...recordList]);
          }}
        >
          <PlusIconStyled />
        </TouchableOpacity>
        <Blank width={getWidthPixel(36)} />
        <TouchableOpacity
          onPress={() => {
            if (recordList[idx].kg.length !== 0) {
              setList(getDeleteRecordSet({ list: recordList, machineIdx: machineIdx }));
              storeData('recordData', JSON.stringify(getDeleteRecordSet({ list: recordList, machineIdx: machineIdx })));
            }
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
