import Button from 'components/core/Button/Button';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { QueryState } from 'state/state';
import { ReactComponent as ChevronLeft } from 'assets/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from 'assets/ChevronRight.svg';
import './Pagination.scss';

interface PaginationProps {
  totalResults: number;
}

const Pagination = ({ totalResults }: PaginationProps) => {
  const [queryState, setQueryState] = useRecoilState(QueryState);
  const [currentPage, setCurrentPage] = useState(1);

  const resultPerPage = parseInt(process.env.REACT_APP_PAGE_COUNT || '');
  const totalPages = Math.ceil(totalResults / resultPerPage);

  const handleDown = () => {
    setCurrentPage(currentPage - 1);
    setQueryState({ ...queryState, page: currentPage - 1 });
  };

  const handleUp = () => {
    setCurrentPage(currentPage + 1);
    setQueryState({ ...queryState, page: currentPage + 1 });
  };

  return (
    <div className="c-pagination">
      {currentPage > 1 && (
        <Button
          style={'primary'}
          label={<ChevronLeft width={20} height={20} />}
          onClick={handleDown}
        />
      )}
      <p className="c-pagination__number">{currentPage}</p>
      {currentPage !== totalPages && (
        <Button
          style={'primary'}
          label={<ChevronRight width={20} height={20} />}
          onClick={handleUp}
        />
      )}
    </div>
  );
};

export default Pagination;
