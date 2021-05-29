import React, { useEffect, useState } from 'react';
import homeApi from '../../api/homeApi';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
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

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await homeApi.users();
      if (response && response.data) {
        setDataUsers(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    void getUsers();
  }, []);

  return (
    <div className="home-page">
      <Table columns={COLUMNS} dataSource={dataUsers} loading={loading}>
        <Pagination position="right" />
      </Table>
    </div>
  );
};

export default HomePage;
