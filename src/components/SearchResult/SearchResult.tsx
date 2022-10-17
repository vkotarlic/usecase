import React from 'react';
import { SearchResponse } from 'models/SearchResponse';
import './SearchResult.scss';
import Badge from 'components/core/Badge/Badge';

const SearchResult = (searchResult: SearchResponse) => {
  return (
    <div className="c-search-result">
      <a
        className="c-search-result__image-container"
        href={searchResult.owner.html_url}
        rel="noreferrer"
        target="_blank"
      >
        <img className="c-search-result__image" src={searchResult.owner.avatar_url} />
      </a>
      <div className="c-search-result__data">
        <a className="c-search-result__title-container" href={searchResult.html_url}>
          <h3 className="c-search-result__data-title">{searchResult.name}</h3>
        </a>
        <p className="c-search-result__data-description">{searchResult.description}</p>
        <Badge size="small" label={searchResult.language} />
      </div>
    </div>
  );
};

export default SearchResult;
