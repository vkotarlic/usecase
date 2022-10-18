export interface QueryData {
  searchBy: string;
  userName?: string;
  organization?: string;
  languages?: string[];
  topics?: string[];
  name: boolean;
  description: boolean;
  readme: boolean;
  starsNumber?: number;
  starsComparison?: string;
  sizeNumber?: number;
  sizeComparison?: string;
  dateComparison?: string;
  date?: string;
  page?: number;
  sortBy?: string;
  orderBy?: string;
}
