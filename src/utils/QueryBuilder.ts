import { QueryData } from 'models/QueryData';

export const queryBuilder = ({ searchBy, name, description, readme }: QueryData) => {
  return `${searchBy}${name ? 'in:name' : ''}${description ? 'in:description' : ''}${
    readme ? 'in:readme' : ''
  }`;
};
