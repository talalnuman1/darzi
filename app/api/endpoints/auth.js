import axios from 'axios';
import axiosInstance from '../axiosInstance';
const userLogin = async data => {
  try {
    const response = await axiosInstance.post('/login', data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
const userRegister = data => axiosInstance.post('/register', data);

export default {
  userLogin,
  userRegister,
};
