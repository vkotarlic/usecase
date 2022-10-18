import { QueryData } from 'models/QueryData';

export const emptyQueryData: QueryData = {
  searchBy: '',
  userName: '',
  name: true,
  description: false,
  readme: false,
  languages: [],
  organization: '',
  topics: [],
  starsComparison: undefined,
  starsNumber: undefined,
  sizeComparison: undefined,
  sizeNumber: undefined
};
