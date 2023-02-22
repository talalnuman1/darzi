import axiosInstance from '../axiosInstance';

const getUsers = () => axiosInstance.get('/users');
const getUserById = id => axiosInstance.get(`/users/${id}`);
const createUser = user => axiosInstance.post('/users', user);

export default {
  getUsers,
  getUserById,
  createUser,
};
