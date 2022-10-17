import { QueryData } from 'models/QueryData';

export const queryBuilder = ({
  searchBy,
  userName,
  organization,
  name,
  description,
  readme,
  languages,
  topics,
  starsNumber,
  starsComparison,
  sizeNumber,
  sizeComparison,
  dateComparison,
  date
}: QueryData) => {
  let query = `${searchBy}${name ? 'in:name' : ''}${description ? 'in:description' : ''}${
    readme ? 'in:readme' : ''
  }${userName ? `+username:${userName}` : ''}${organization ? `+org:${organization}` : ''}`;

  languages?.forEach((lang) => {
    query += `+language:${encodeURI(lang)}`;
  });

  topics?.forEach((topic) => {
    query += `+topic:${encodeURI(topic)}`;
  });

  query +=
    starsComparison !== undefined && starsNumber ? `+stars:${starsComparison}${starsNumber}` : '';
  query += sizeComparison !== undefined && sizeNumber ? `+size:${sizeComparison}${sizeNumber}` : '';
  query += dateComparison !== undefined && date ? `+created:${dateComparison}${date}` : '';

  return query;
};
