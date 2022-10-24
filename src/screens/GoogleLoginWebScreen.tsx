import React, { useEffect, useState } from 'react';
import WebView from 'react-native-webview';

import { userState } from '../store/atoms/userAtom';
import { GOOGLE__LOGIN__URL } from '../constants';
import { getGoogleUserSelector } from '../store/selectors/loginSelector';
import { getParseGoogleCode } from '../utils';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { INJECTED__JAVASCRIPT } from '../constants';

export default function GoogleLoginWebScreen() {
  const setUserData = useSetRecoilState(userState);
  const [parseURL, setURL] = useState('');
  const data = useRecoilValue(getGoogleUserSelector({ code: parseURL }));
  useEffect(() => {
    setUserData(data);
  }, [data, setUserData]);
  return (
    <WebView
      source={{
        uri: GOOGLE__LOGIN__URL,
      }}
      injectedJavaScript={INJECTED__JAVASCRIPT}
      userAgent="Mozilla/5.0 (X11; Linux x86_64) Chrome/51.0.2704.103"
      onMessage={event => {
        setURL(getParseGoogleCode(event.nativeEvent.url));
      }}
    />
  );
}
