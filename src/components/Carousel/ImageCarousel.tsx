import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RESOURCE_PREFIX } from '../../constants';
import { getWidthPixel } from '../../utils/responsive';

export default function ImageCarousel({
  pages,
  pageWidth,
  gap,
  offset,
}: {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}) {
  const [page, setPage] = useState(0);

  function renderItem({ imageUrl }: { imageUrl: string }) {
    return <ImageStyled source={{ uri: RESOURCE_PREFIX + imageUrl }} />;
  }

  const onScroll = (e: any) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / (pageWidth + gap));
    setPage(newPage);
  };

  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled={true}
        renderItem={renderItem()}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({ length: pages.length }, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
}

const Container = styled.View`
  height: 60%;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: ${props => (props.focused ? '#262626' : '#dfdfdf')};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const ImageStyled = styled.Image`
  resize-mode: contain;
  width: ${getWidthPixel(200)};
  height: ${getWidthPixel(200)};
`;
