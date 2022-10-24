/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Modal, ScrollView } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import { palette } from '../../constants/palette';
import { RoutineModalProps } from '../../constants/types';
import { userState } from '../../store/atoms/userAtom';
import { getAllWorkoutSelector } from '../../store/selectors/machineSelector';
import { postRoutineAPI } from '../../utils/api';
import { modifyList } from '../../utils';

import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import AddCard from '../Card/AddCard';
import RoutineCard from '../Card/RoutineCard';
import AddRoutineHeaderContainer from '../Container/AddRoutineHeaderContainer';
import SubHeadText from '../Text/SubHeadText';
import SearchBarInput from '../Input/SearchBarInput';
import { routineRefreshState } from '../../store/atoms/routineAtom';
import AlertModal from './AlertModal';
import { modifyRoutineAPI } from '../../utils/api/routine';

function AddRoutineModal({ isVisible, setVisible, inputType, name, setModalVisible, routineList }: RoutineModalProps) {
  const initialName = name;
  const cardList = useRecoilValue(getAllWorkoutSelector);
  const [selectedList, setSelectedList] = useState<number[]>(routineList);
  const userData = useRecoilValue(userState);
  const [routineName, setName] = useState<string>(name);
  const [keyword, setKeyword] = useState<string>('');
  const regex = new RegExp(keyword + '.*');
  const [refresh, setRefresh] = useRecoilState(routineRefreshState);
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={false}>
      <Background>
        <AddRoutineHeaderContainer
          title={routineName}
          goBack={() => setVisible(false)}
          setTitle={setName}
          submit={() => {
            if (routineName) {
              if (inputType === 0) {
                postRoutineAPI({
                  accessToken: userData.accessToken,
                  selectedList: selectedList,
                  routineName: routineName,
                  setRefresh: setRefresh,
                  refresh: refresh,
                });
                setSelectedList([]);
                setVisible(false);
                setName('');
              } else {
                modifyRoutineAPI({
                  accessToken: userData.accessToken,
                  selectedList: selectedList,
                  newRoutineName: routineName,
                  setRefresh: setRefresh,
                  refresh: refresh,
                  routineName: initialName,
                });
                setSelectedList([]);
                setVisible(false);
                if (setModalVisible) {
                  setModalVisible(false);
                }
                setName('');
              }
            } else {
              setAlertVisible(true);
            }
          }}
        />
        <RoutineContainer>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {selectedList.map(idx => {
              return (
                <RoutineCard
                  key={idx}
                  imageUrl1={cardList[idx - 1].imageUrl1}
                  onPress={() => {
                    setSelectedList(selectedList.filter(i => i !== idx));
                  }}
                />
              );
            })}
          </ScrollView>
        </RoutineContainer>
        <ContainerStyled>
          <InnerContainerStyled>
            <TitleStyled>
              <SubHeadText fontNumber={2}>원하는 운동을</SubHeadText>
              <SubHeadText fontNumber={2}>나의 루틴에 추가해보세요!</SubHeadText>
            </TitleStyled>
            <Blank height={getHeightPixel(10)} />
            <SearchBarInput keyword={keyword} onChangeText={setKeyword} placeHolder={'운동을 검색해보세요'} />
            <Blank height={getHeightPixel(10)} />
          </InnerContainerStyled>
          <ScrollView>
            <ListStyled>
              {cardList.map(card => {
                if (regex.test(card.krMachineName) || regex.test(card.engMachineName)) {
                  return (
                    <AddCard
                      onPress={() =>
                        modifyList({
                          idx: card.machineIdx,
                          selectedList: selectedList,
                          setSelectedList: setSelectedList,
                        })
                      }
                      key={card.machineIdx}
                      isSelected={selectedList.includes(card.machineIdx)}
                      {...card}
                    />
                  );
                }
              })}
              {cardList.length % 2 !== 0 ? <Blank width={getWidthPixel(170)} height={getWidthPixel(200)} /> : null}
            </ListStyled>
            <Blank height={getHeightPixel(500)} />
          </ScrollView>
        </ContainerStyled>
        {alertVisible ? (
          <AlertModal questionText={'제목을 입력해주세요'} isVisible={alertVisible} setVisible={setAlertVisible} />
        ) : null}
      </Background>
    </Modal>
  );
}

export default AddRoutineModal;

const RoutineContainer = styled.View`
  flex-direction: row;
`;

const TitleStyled = styled.View`
  width: ${getWidthPixel(358)};
  margin-left: ${getWidthPixel(5)};
`;

const InnerContainerStyled = styled.View`
  width: ${getWidthPixel(358)};
  align-items: center;
  padding-top: ${getHeightPixel(30)};
`;

const ContainerStyled = styled.View`
  background-color: white;
  border-radius: ${getWidthPixel(10)};
  width: 100%;
  align-items: center;
  height: 100%;
`;

const ListStyled = styled.View`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const Background = styled.View`
  background-color: ${palette.gray_06};
  align-items: center;
`;
