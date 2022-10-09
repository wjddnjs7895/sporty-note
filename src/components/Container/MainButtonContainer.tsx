import React, { useState } from 'react';
import styled from 'styled-components/native';

import SubHeadText from '../Text/SubHeadText';
import BodyText from '../Text/BodyText';
import Blank from '../Blank';
import Button from '../Button';
import MainLongButton from '../Button/MainLongButton';
import SearchBarButton from '../Button/SearchBarButton';
import { getWidthPixel } from '../../utils/responsive';
import { getPixelToPixel } from '../../utils/responsive';

import { MAIN_BUTTON_HEIGHT } from '../../constants';
import Note_List_Icon from '../../assets/icons/illust/note_list.svg';
import Favorite_Icon from '../../assets/icons/illust/favorite.svg';
import Widget_Icon from '../../assets/icons/illust/widget.svg';
import My_Routine_Icon from '../../assets/icons/illust/my_routine.svg';
import { NavigationProps } from '../../constants/navigator';
import ReadyModal from '../Modal/ReadyModal';

function MainButtonContainer({ navigation }: NavigationProps) {
  const [visible, setVisible] = useState(false);
  return (
    <ContainerStyled>
      <ReadyModal isVisible={visible} setVisible={setVisible} />
      <SearchBarButton onPress={() => navigation.navigate('SearchScreen')}>운동 방법을 검색해보세요.</SearchBarButton>
      <Blank height="25px" />
      <InnerContainerStyled>
        <Button
          width={getWidthPixel(211)}
          height={MAIN_BUTTON_HEIGHT}
          buttonColor="white"
          onPress={() => navigation.navigate('NoteListScreen')}
        >
          <TextContainerStyled>
            <SubHeadText fontNumber={2}>노트 리스트</SubHeadText>
            <BodyText fontNumber={5} fontColor={'gray_04'}>
              나의 운동 노트를 확인하세요
            </BodyText>
          </TextContainerStyled>
          <ImageStyled>
            <Note_List_Icon />
          </ImageStyled>
        </Button>
        <Button
          width={getWidthPixel(136)}
          height={MAIN_BUTTON_HEIGHT}
          buttonColor="white"
          onPress={() => setVisible(true)}
        >
          <TextContainerStyled>
            <SubHeadText fontNumber={2}>즐겨찾기</SubHeadText>
          </TextContainerStyled>
          <ImageStyled>
            <Favorite_Icon />
          </ImageStyled>
        </Button>
      </InnerContainerStyled>
      <InnerContainerStyled>
        <Button
          width={getWidthPixel(136)}
          height={MAIN_BUTTON_HEIGHT}
          buttonColor="white"
          onPress={() => setVisible(true)}
        >
          <TextContainerStyled>
            <SubHeadText fontNumber={2}>위젯</SubHeadText>
          </TextContainerStyled>
          <ImageStyled>
            <Widget_Icon />
          </ImageStyled>
        </Button>
        <Button
          width={getWidthPixel(211)}
          height={MAIN_BUTTON_HEIGHT}
          buttonColor="white"
          onPress={() => setVisible(true)}
        >
          <TextContainerStyled>
            <SubHeadText fontNumber={2}>마이 루틴</SubHeadText>
            <BodyText fontNumber={5} fontColor={'gray_04'}>
              내 운동 루틴을 확인하고 싶다면?
            </BodyText>
          </TextContainerStyled>
          <ImageStyled>
            <My_Routine_Icon />
          </ImageStyled>
        </Button>
      </InnerContainerStyled>
      <MainLongButton onPress={() => setVisible(true)}>
        <SubHeadText fontNumber={2}>마이 플레이스</SubHeadText>
        <BodyText fontNumber={5} fontColor={'white'}>
          내 근처 운동 기구를 찾아보세요!
        </BodyText>
      </MainLongButton>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  align-items: center;
  margin-top: ${getPixelToPixel(25)};
`;

const InnerContainerStyled = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${getWidthPixel(358)};
  margin-bottom: 10px;
`;

const TextContainerStyled = styled.View`
  padding-top: ${getWidthPixel(10)};
  padding-left: ${getWidthPixel(14)};
`;

const ImageStyled = styled.View`
  position: absolute;
  width: ${getPixelToPixel(40)};
  height: ${getPixelToPixel(40)};
  right: 0px;
  bottom: 0px;
`;

export default MainButtonContainer;
