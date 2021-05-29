import React from 'react';
import Loader from '../Loader';

import './Table.scss';

interface ITable {
  columns: { title: string; dataIndex: string; isImage?: boolean }[];
  dataSource: { [key: string]: any }[];
  loading?: boolean;
}

const Table: React.FC<ITable> = ({ columns, dataSource, loading, children }) => {
  return (
    <div className="table">
      {loading && (
        <div className="table-loading">
          <Loader size="sm" color="#000" />
        </div>
      )}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {columns.map((item) => (
                <th key={item.dataIndex}>{item.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item, index) => (
              <tr key={index}>
                {columns.map((ele) => {
                  if (ele.isImage) {
                    return (
                      <td key={ele.dataIndex}>
                        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                        <img src={item[ele.dataIndex]} alt="avatar" />
                      </td>
                    );
                  }
                  return <td key={ele.dataIndex}>{item[ele.dataIndex]}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {children}
    </div>
  );
};

export default Table;
