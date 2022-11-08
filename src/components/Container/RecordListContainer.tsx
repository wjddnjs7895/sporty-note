import React from 'react';
import { ScrollView, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import RecordContainer from './RecordContainer';

export default function RecordListContainer({ workoutList, short }: { workoutList: any[]; short: boolean }) {
  return (
    <ContainerStyled height={short ? getHeightPixel(640) : getHeightPixel(500)}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {workoutList.map((workout, index) => {
          return (
            <View key={index}>
              <RecordContainer imageUrl={workout.url} name={workout.machineName} machineIdx={workout.machineIdx} />
              <Blank height={getHeightPixel(15)} />
            </View>
          );
        })}
        <Blank height={getHeightPixel(200)} />
      </ScrollView>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View<{ height: string }>`
  width: ${getWidthPixel(390)};
  ${({ height }) => css`
    height: ${height};
  `}
  margin-top: ${getHeightPixel(10)};
`;
