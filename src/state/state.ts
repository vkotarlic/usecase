import { QueryData } from 'models/QueryData';
import { atom } from 'recoil';

export const QueryState = atom<QueryData>({
  key: 'QueryState',
  default: { searchBy: '', name: true, description: false, readme: false }
});

export const HistoryState = atom({
  key: 'HistoryState',
  default: [] as QueryData[]
});
