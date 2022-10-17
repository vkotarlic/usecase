import React from 'react';
import { useRecoilValue } from 'recoil';
import { HistoryState } from 'state/state';

const History = () => {
  const historyState = useRecoilValue(HistoryState);

  return (
    <div>
      {historyState.map((oldQuery, i) => (
        <p key={i}>{oldQuery.searchBy}</p>
      ))}
    </div>
  );
};

export default History;
