import { getHeightPixelByWidth } from '../utils/responsive';

export const MAIN_BUTTON_HEIGHT = getHeightPixelByWidth(211, 103);

export const BASE__URL = 'https://api.sportynote.com/';

export const KAKAO__LOGIN__URL =
  'https://kauth.kakao.com/oauth/authorize?client_id=c885ecfe893222b57506c1f5098018f0&redirect_uri=https://api.sportynote.com/auth/code&response_type=code&response_mode=form_post';

export const GOOGLE__LOGIN__URL =
  'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=889016095733-q0pbdimh0k14gcrq6dfoi266mchknu7c.apps.googleusercontent.com&redirect_uri=https://api.sportynote.com/auth/code&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&flowName=GeneralOAuthFlow&include_granted_scopes=true';

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

export const RESOURCE_PREFIX = 'https://sporty-note-resources.s3.ap-northeast-2.amazonaws.com/res/';

export const TERMS__URL = 'https://artistic-journey-aea.notion.site/99aa16f29d384869b019aea60491fee1';

export const PRIVATE__POLICY__URL = 'https://artistic-journey-aea.notion.site/58f42e4244404aa08cee1920cd8d35bc';

export const NOTE__DATA = {
  noteIdx: 0,
  machineDto: {
    engMachineName: '',
    imageUrl1: '',
    imageUrl2: '',
    krMachineName: '',
    machineIdx: 0,
    targetArea: '',
    userFavoriteIdx: 0,
    videoUrl1: '',
  },
  nodeDtos: {
    '': [
      {
        machineIdx: 0,
        nodeIdx: 0,
        type: { engName: '', krName: '' },
        color: '',
        text: '',
        x_location: 0,
        y_location: 0,
        pictureUrl: '',
        body: '',
      },
    ],
  },
};
