import { LOGIN_URL } from '../constants/endpoints';
import axiosClient from './axiosClient';

export interface IDataLogin {
  username: string;
  password: string;
}

const authApi = {
  login: (data: IDataLogin) => {
    return axiosClient.post(LOGIN_URL, data);
  },
};

export default authApi;
