import React, { useRef, useState } from 'react';
import styled from 'styled-components/native';

import { getWidthPixel, getPixelToNumber } from '../../utils/responsive';

import Edit_Icon from '../../assets/icons/button/edit.svg';
import EditModal from '../Modal/EditModal';
import { TouchableOpacity, View } from 'react-native';
import { MemoData } from '../../constants/types';

function EditModalButton({ ...note }: MemoData) {
  const ViewRef = useRef<View>(null);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [location, setLocation] = useState<number[]>([0, 0]);
  return (
    <View
      collapsable={false}
      ref={ViewRef}
      onLayout={() => {
        ViewRef.current?.measure((x, y, width, height, pageX, pageY) => {
          setLocation([pageX, pageY]);
        });
      }}
    >
      <TouchableOpacity onPress={() => setVisible(!isVisible)}>
        <EditIconStyled viewBox={'0 0 ' + getPixelToNumber(30) + ' ' + getPixelToNumber(30)} />
      </TouchableOpacity>
      {isVisible ? <EditModal location={location} isVisible={isVisible} setVisible={setVisible} {...note} /> : null}
    </View>
  );
}

const EditIconStyled = styled(Edit_Icon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

export default EditModalButton;
