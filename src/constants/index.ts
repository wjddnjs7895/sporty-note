import { getHeightPixelByWidth } from '../utils/responsive';

export const MAIN_BUTTON_HEIGHT = getHeightPixelByWidth(211, 103);

export const BASE__URL = 'http://ec2-15-164-215-157.ap-northeast-2.compute.amazonaws.com:8080/';

export const KAKAO__LOGIN__URL =
  'https://kauth.kakao.com/oauth/authorize?client_id=c885ecfe893222b57506c1f5098018f0&redirect_uri=http://ec2-15-164-215-157.ap-northeast-2.compute.amazonaws.com:8080/auth/code&response_type=code';

export const INJECTED__JAVASCRIPT = 'window.ReactNativeWebView.postMessage("this is message from web");';
