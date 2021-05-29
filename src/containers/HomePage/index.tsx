import React, { useEffect, useState } from 'react';
import homeApi from '../../api/homeApi';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import { chunkArray } from '../../constants/functions';
import './HomePage.scss';

const COLUMNS = [
  { dataIndex: 'avatar', title: 'Avatar', isImage: true },
  { dataIndex: 'name', title: 'Name' },
  { dataIndex: 'email', title: 'Email' },
  { dataIndex: 'phone', title: 'Phone' },
];

const HomePage: React.FC = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalUser, setTotalUser] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [dataUsersCurrent, setDataUsersCurrent] = useState<any[]>([]);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await homeApi.users();
      if (response && response.data) {
        setDataUsers(response.data);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setTotalUser(response.data.length);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChangePagination = () => {
    const newDataUsers = chunkArray(dataUsers, Math.ceil(perPage))[currentPage - 1];
    setLoading(true);
    setDataUsersCurrent(newDataUsers);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    if (totalUser) {
      handleChangePagination();
    }
  }, [perPage, currentPage, totalUser]);

  useEffect(() => {
    void getUsers();
  }, []);

  return (
    <div className="home-page">
      <Table columns={COLUMNS} dataSource={dataUsersCurrent} loading={loading}>
        <Pagination
          position="right"
          total={totalUser}
          per_page={perPage}
          setCurrentPage={setCurrentPage}
          setPerPage={setPerPage}
          current_page={currentPage}
        />
      </Table>
    </div>
  );
};

export default HomePage;
