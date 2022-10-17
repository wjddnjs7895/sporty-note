import axios from 'axios';
import { BASE__URL } from '../../constants';

export async function getLogoutAPI({ accessToken }: { accessToken: string }) {
  const { data } = await axios.get(`${BASE__URL}auth/logout`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
}
