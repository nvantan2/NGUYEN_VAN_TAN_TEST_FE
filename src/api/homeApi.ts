import { GET_USERS } from '../constants/endpoints';
import axiosClient from './axiosClient';

const homeApi = {
  users: () => {
    return axiosClient.get(GET_USERS);
  },
};

export default homeApi;
