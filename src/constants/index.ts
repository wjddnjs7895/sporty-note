import { getHeightPixelByWidth } from '../utils/responsive';

export const MAIN_BUTTON_HEIGHT = getHeightPixelByWidth(211, 103);

export const BASE__URL = 'https://api.sportynote.com/';

export const KAKAO__LOGIN__URL =
  'https://kauth.kakao.com/oauth/authorize?client_id=c885ecfe893222b57506c1f5098018f0&redirect_uri=https://api.sportynote.com/auth/code&response_type=code';

export const INJECTED__JAVASCRIPT = 'window.ReactNativeWebView.postMessage("this is message from web");';

export const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const RESOURCE_PREFIX = 'https://codepipeline-ap-northeast-2-240232601473.s3.ap-northeast-2.amazonaws.com/res/';

export const TERMS__URL = 'https://artistic-journey-aea.notion.site/99aa16f29d384869b019aea60491fee1';

export const PRIVATE__POLICY__URL = 'https://artistic-journey-aea.notion.site/58f42e4244404aa08cee1920cd8d35bc';
