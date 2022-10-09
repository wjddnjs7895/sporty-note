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

export function getParseCode(data: string) {
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
