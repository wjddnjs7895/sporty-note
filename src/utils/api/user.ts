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
