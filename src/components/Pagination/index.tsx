import React, { useEffect, useState } from 'react';

import './Pagination.scss';

interface IPagination {
  position?: 'left' | 'right' | 'center';
}

const Pagination: React.FC<IPagination> = ({ position }) => {
  const [positionPagination, setPositionPagination] = useState('flex-start');
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

  return (
    <div className="pagination" style={{ justifyContent: positionPagination }}>
      <div className="pagination__per-page">
        <p>Per page:</p>
        <select defaultValue="15">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <button type="button" title="Previous" disabled>
        {'<'}
      </button>
      <button>1</button>
      <button>2</button>
      <button type="button" title="Next">
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
