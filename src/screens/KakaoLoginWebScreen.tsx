import React, { useEffect, useState } from 'react';
import WebView from 'react-native-webview';

import { userState } from '../store/atoms/userAtom';
import { KAKAO__LOGIN__URL } from '../constants';
import { getKakaoUserSelector } from '../store/selectors/loginSelector';
import { getParseCode } from '../utils';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { INJECTED__JAVASCRIPT } from '../constants';

export default function KakaoLoginWebScreen() {
  const setUserData = useSetRecoilState(userState);
  const [parseURL, setURL] = useState('');
  const data = useRecoilValue(getKakaoUserSelector({ code: parseURL }));
  useEffect(() => {
    setUserData(data);
  }, [data, setUserData]);

  return (
    <WebView
      source={{
        uri: KAKAO__LOGIN__URL,
      }}
      injectedJavaScript={INJECTED__JAVASCRIPT}
      onMessage={event => {
        setURL(getParseCode(event.nativeEvent.url));
      }}
    />
  );
}
