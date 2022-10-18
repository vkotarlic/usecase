import React from 'react';
import { QueryData } from 'models/QueryData';
import './QueryCard.scss';
import Badge from 'components/core/Badge/Badge';

interface QueryCardProps {
  query: QueryData;
  onClick?: () => void;
}

const QueryCard = ({
  query: {
    searchBy,
    name,
    description,
    readme,
    languages,
    topics,
    starsNumber,
    sizeNumber,
    sortBy,
    orderBy,
    date
  },
  onClick
}: QueryCardProps) => {
  return (
    <div className="c-query-card" onClick={onClick}>
      <span className="c-query-card__title">Query parameters:</span>
      <p className="c-query-card__item">Search text: {searchBy}</p>
      <p className="c-query-card__item">
        Search by: {name && <Badge label="Name" size={'small'} />}
        {description && <Badge label="Description" size={'small'} />}
        {readme && <Badge label="Readme" size={'small'} />}
      </p>
      <p className="c-query-card__item">
        {languages?.length && <span>Languages: </span>}
        {languages?.length &&
          languages.map((lang, i) => <Badge key={i} label={lang} size={'small'} />)}
      </p>
      <p className="c-query-card__item">
        {topics?.length && <span>Topics: </span>}
        {topics?.length && topics.map((topic, i) => <Badge key={i} label={topic} size={'small'} />)}
      </p>
      {starsNumber && <p className="c-query-card__item">{`Stars number: ${starsNumber}`}</p>}
      {sizeNumber && <p className="c-query-card__item">{`Stars number: ${sizeNumber}`}</p>}
      {date && <p className="c-query-card__item">{`Ordered: ${date}`}</p>}
      {sortBy && <p className="c-query-card__item">{`Sorted: ${sortBy}`}</p>}
      {orderBy && <p className="c-query-card__item">{`Ordered: ${orderBy}`}</p>}
    </div>
  );
};

export default QueryCard;
