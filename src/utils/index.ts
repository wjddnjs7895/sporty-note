/* eslint-disable react-hooks/rules-of-hooks */
import { useRecoilValue } from 'recoil';
import { COLOR__STRING } from '../constants/palette';
import { MemoListDataProps, MemoTitleProps } from '../constants/types';
import { userState } from '../store/atoms/userAtom';

export function getMemoTitle({ ...memoList }: MemoListDataProps) {
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

export function getParseCode(data: string) {
  const exp = 'code=';
  var condition = data.indexOf(exp);
  if (condition !== -1) {
    var request_code = data.substring(condition + exp.length);
    return request_code;
  }
  return '';
}
