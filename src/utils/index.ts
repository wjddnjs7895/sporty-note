/* eslint-disable react-hooks/rules-of-hooks */
import { BodyKeyTypes } from '../constants/body';
import { COLOR__STRING } from '../constants/palette';
import { MemoTitleProps, MemoData, DayColorProps } from '../constants/types';

import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import { Linking } from 'react-native';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/atoms/userAtom';
import AsyncStorage from '@react-native-community/async-storage';

import auth from '@react-native-firebase/auth';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { postAppleLoginAPI } from './api/user';

export function getMemoTitle({ ...memoList }: { [key: BodyKeyTypes]: MemoData[] }) {
  var MemoBodyList: MemoTitleProps[] = [];
  Object.keys(memoList).forEach(key => {
    MemoBodyList.push({
      index: key,
      body: memoList[key][0].type.krName,
      tagColor: COLOR__STRING[memoList[key][0].color],
    });
  });
  return MemoBodyList;
}

export function isUserLogin(): boolean {
  const userInfo = useRecoilValue(userState);
  return userInfo.success !== false;
}

export const getAsyncData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const data = JSON.parse(value);
      return data;
    }
  } catch (e: any) {
    console.log(e.message);
  }
};

export function getParseGoogleCode(data: string) {
  const exp1 = 'code=';
  const exp2 = '&scope=';
  var condition1 = data.indexOf(exp1);
  var condition2 = data.indexOf(exp2);
  if (condition1 !== -1 && condition2 !== -1) {
    var request_code = data.substring(condition1 + exp1.length);
    request_code = request_code.substring(0, condition2);
    return request_code;
  }
  return '';
}

export function getParseKakaoCode(data: string) {
  const exp = 'code=';
  var condition = data.indexOf(exp);
  if (condition !== -1) {
    var request_code = data.substring(condition + exp.length);
    return request_code;
  }
  return '';
}

export function getCalendar(date: Date) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      if (day >= monthStart && day <= monthEnd) {
        days.push(day);
      } else {
        days.push('');
      }
      day = addDays(day, 1);
    }
    rows.push(days);
    days = [];
  }
  return rows;
}

export function getWeekCalendar(date: Date) {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(date);
  const endDate = endOfWeek(date);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      if (day >= monthStart && day <= monthEnd) {
        days.push(day);
      } else {
        days.push('');
      }
      day = addDays(day, 1);
    }
    rows.push(days);
    days = [];
  }
  return rows;
}

export function getDayColor({ isSelected, isToday }: { isSelected: boolean; isToday: boolean }): DayColorProps {
  if (isSelected) {
    return {
      backgroundColor: 'black',
      fontColor: 'white',
    };
  } else if (isToday) {
    return {
      backgroundColor: 'gray_06',
      fontColor: 'lime_01',
    };
  } else {
    return {
      backgroundColor: 'gray_06',
      fontColor: 'black',
    };
  }
}

export function modifyList({
  idx,
  selectedList,
  setSelectedList,
}: {
  idx: number;
  selectedList: number[];
  setSelectedList: Dispatch<SetStateAction<number[]>>;
}) {
  if (!selectedList.includes(idx)) {
    setSelectedList(selectedList.concat(idx));
  } else {
    setSelectedList(selectedList.filter(i => i !== idx));
  }
}

export async function openLinkingURL(url: string) {
  await Linking.canOpenURL(url);
  Linking.openURL(url);
}

export async function onAppleButtonPress() {
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  if (!appleAuthRequestResponse.identityToken) {
    throw 'Apple Sign-In failed - no identify token returned';
  }

  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
  auth().signInWithCredential(appleCredential);
  postAppleLoginAPI({
    email: appleAuthRequestResponse.email || '',
    name: appleAuthRequestResponse.fullName?.nickname || '',
    uid: identityToken,
  });
}

export function getIdxFromRecord({ machineIdx, list }: { machineIdx: number; list: any[] }): number {
  for (let i = 0; i < list.length; i++) {
    if (list[i].machineIdx === machineIdx) {
      return i;
    }
  }
  return -1;
}

export function getAddRecordSet({
  list,
  machineIdx,
}: {
  list: { machineIdx: number; count: number[]; kg: number[]; complete: boolean[]; length: number }[];
  machineIdx: number;
}) {
  const result: { machineIdx: number; count: number[]; kg: number[]; complete: boolean[]; length: number }[] = [];
  const templist = [...list];
  templist.forEach(record => {
    if (record.machineIdx !== machineIdx) {
      result.push(record);
    } else {
      console.log('inside function before record: ', record);
      result.push({
        machineIdx: machineIdx,
        count: record.count.concat(0),
        kg: record.kg.concat(0),
        complete: record.complete.concat(false),
        length: record.length + 1,
      });
    }
  });
  return [...result];
}

export function getDeleteRecordSet({ list, machineIdx }: { list: any[]; machineIdx: number }) {
  let result: { machineIdx: number; count: any; kg: any; complete: any; length: any }[] = [];
  list.forEach(record => {
    if (record.machineIdx !== machineIdx) {
      result.push(record);
    } else {
      result.push({
        machineIdx: machineIdx,
        count: record.count.slice(0, record.length - 1),
        kg: record.kg.slice(0, record.length - 1),
        complete: record.complete.slice(0, record.length - 1),
        length: record.length - 1,
      });
    }
  });
  return result;
}

export function getModifyRecordSet({
  list,
  machineIdx,
  count,
  kg,
  complete,
  set,
}: {
  list: any[];
  machineIdx: number;
  count: number;
  kg: number;
  complete: boolean;
  set: number;
}) {
  let result: { machineIdx: number; count: any; kg: any; complete: any; length: any }[] = [];
  list.forEach(record => {
    if (record.machineIdx !== machineIdx) {
      result.push(record);
    } else {
      result.push({
        machineIdx: machineIdx,
        count: record.count.splice(set, 1, count),
        kg: record.kg.splice(set, 1, kg),
        complete: record.complete.splice(set, 1, complete),
        length: record.length,
      });
    }
  });
  return result;
}

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e: any) {
    console.error(e.message);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e: any) {
    console.error(e.message);
  }
};
