import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { BASE__URL } from '../../constants';

export async function getLogoutAPI({ accessToken }: { accessToken: string }) {
  const { data } = await axios.get(`${BASE__URL}auth/logout`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
}

export async function deleteUserAPI({ accessToken }: { accessToken: string }) {
  const { data } = await axios.delete(`${BASE__URL}users/delete`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
}

export async function isLoginAPI({
  accessToken,
  setLogin,
}: {
  accessToken: string;
  setLogin: Dispatch<SetStateAction<boolean>>;
}) {
  const { data } = await axios.get(`${BASE__URL}auth/isLogin`, {
    headers: {
      Authorization: accessToken,
    },
  });
  if (data) {
    setLogin(data);
  }
}

export async function postAppleLoginAPI({ email, name, uid }: { email: string; name: string; uid: string }) {
  const { data } = await axios.post(`${BASE__URL}auth/apple/callback`, {
    email: email,
    name: name,
    uid: uid,
  });
  if (data) {
    AsyncStorage.setItem('userData', JSON.stringify({ accessToken: data.accessToken }));
  }
  return data;
}
