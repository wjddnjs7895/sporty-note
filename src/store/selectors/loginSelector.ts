import axios from 'axios';
import { selectorFamily } from 'recoil';

import { loginProps, userProps } from '../../constants/types';
import { BASE__URL } from '../../constants';
import { storeData } from '../../utils';

export const getKakaoUserSelector = selectorFamily<userProps, loginProps>({
  key: 'kakao_user/get',
  get:
    ({ code }: loginProps) =>
    async () => {
      if (code === '') {
        return {
          success: false,
          accessToken: '',
        };
      }
      const { data } = await axios.get(`${BASE__URL}auth/kakao/callback`, {
        params: {
          code: code,
        },
      });

      storeData('userData', JSON.stringify({ accessToken: data.accessToken }));
      return data;
    },
});

export const getGoogleUserSelector = selectorFamily<userProps, loginProps>({
  key: 'google_user/get',
  get:
    ({ code }: loginProps) =>
    async () => {
      if (code === '') {
        return {
          success: false,
          accessToken: '',
        };
      }
      const { data } = await axios.get(`${BASE__URL}auth/google/callback`, {
        params: {
          code: code,
        },
      });

      storeData('userData', JSON.stringify({ accessToken: data.accessToken }));
      return data;
    },
});
