import React, { useEffect, useState } from 'react';
import { LIST_PER_PAGE } from '../../constants';

import './Pagination.scss';

interface IPagination {
  position?: 'left' | 'right' | 'center';
  total: number;
  per_page: number;
  current_page: number;
  setCurrentPage: (arg0: any) => void;
  setPerPage: (arg0: number) => void;
}

const Pagination: React.FC<IPagination> = ({ position, total, per_page, current_page, setPerPage, setCurrentPage }) => {
  const [positionPagination, setPositionPagination] = useState('flex-start');
  const [listPage, setListPage] = useState<any[]>([]);

  useEffect(() => {
    switch (position) {
      case 'center':
        setPositionPagination('center');
        break;
      case 'right':
        setPositionPagination('flex-end');
        break;
      default:
        setPositionPagination('flex-start');
        break;
    }
  }, [position]);

  useEffect(() => {
    if (total && per_page) {
      setListPage(Array.from({ length: Math.ceil(total / per_page) }, (_, i) => i + 1));
    }
  }, [total, per_page]);

  return (
    <div className="pagination" style={{ justifyContent: positionPagination }}>
      <div className="pagination__per-page">
        <p>Per page:</p>
        <select
          value={per_page}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}>
          {LIST_PER_PAGE.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        title="Previous"
        disabled={current_page === 1}
        onClick={() => setCurrentPage((prev: number) => prev - 1)}>
        {'<'}
      </button>
      {listPage.map((_, index) => (
        <button
          type="button"
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={index + 1 === current_page ? 'active' : ''}>
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        title="Next"
        disabled={current_page === Math.ceil(total / per_page)}
        onClick={() => setCurrentPage((prev: number) => prev + 1)}>
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
