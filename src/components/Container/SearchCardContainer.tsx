import React from 'react';
import styled from 'styled-components/native';

import Card from '../Card';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import { getAllWorkoutSelector } from '../../store/selectors/machineSelector';
import { useRecoilValue } from 'recoil';
import { NavigationProps } from '../../constants/navigator';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Blank from '../Blank';

function SearchCardContainer({ keyword }: { keyword: string }) {
  const cardList = useRecoilValue(getAllWorkoutSelector);
  const navigation = useNavigation<NavigationProps['navigation']>();
  const regex = new RegExp(keyword + '.*');
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <ListStyled>
        {cardList.map(card => {
          if (regex.test(card.krMachineName) || regex.test(card.engMachineName)) {
            return (
              <Card
                key={card.machineIdx}
                {...card}
                onPress={() =>
                  navigation.navigate('SearchNavigator', {
                    screen: 'NoteScreen',
                    params: {
                      machineIdx: card.machineIdx,
                      krMachineName: card.krMachineName,
                      engMachineName: card.engMachineName,
                      goBackKey: 'SearchScreen',
                    },
                  })
                }
                machineIdx={card.machineIdx}
                width={getWidthPixel(170)}
                height={getWidthPixel(170)}
                marginTop={getHeightPixel(9)}
                marginBottom={getHeightPixel(9)}
              />
            );
          }
        })}
        <Blank width={getWidthPixel(170)} height={getWidthPixel(170)} />
      </ListStyled>
    </ScrollView>
  );
}

const ListStyled = styled.View`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
`;

export default SearchCardContainer;
